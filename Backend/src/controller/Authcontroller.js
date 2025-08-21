
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { Admin } from '../models/Adminmodel.js';
import { Doctor } from '../models/Docmodels.js';
import { Patient } from '../models/Patientmodel.js';
import { Auth } from '../models/Authmodels.js';
import { Notification } from '../models/Notification.js';

const Log = async (req, res) => {
    try {
        let { name, email, role, password } = req.body
        console.log("Received login request:", req.body);

        if (!name || !email || !role || !password) {
            return res.status(400).json({ message: "Fill all information" })
        }


        let roleuser;
        if (role.toLowerCase() === 'admin') {
            roleuser = await Admin.findOne({ email })
            if (!roleuser) {
                roleuser = await Admin.create({ name, email, role: 'admin' });
            }
        }
        else if (role.toLowerCase() === 'doctor') {
            roleuser = await Doctor.findOne({ email })
            if (!roleuser) {
                //     roleuser = await Doctor.create({ name, Id, department, schedule, role: 'doctor', isBusy: isBusy ?? true })
                //     console.log("Doctor Data:", roleuser);
            }
            roleuser = await Doctor.create({ name, email, role: 'doctor' })
            await Notification.create({
                message: `Doctor logged in: ${roleuser.name}`,
                type: "doctor"
            });
            console.log("Doctor Data:", roleuser);
        }
        else if (role.toLowerCase() === 'patient') {
            roleuser = await Patient.findOne({ email })
            if (!roleuser) {
                roleuser = await Patient.create({ name, email, role: 'patient' })
            }
        }
        if (!roleuser) {
            console.log(" User not found in role model");
            return res.status(404).json({ message: "User not found" });
        }


        let user = await Auth.findOne({ email });
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10)
            user = new Auth({ name, email, role, password: hashedPassword });

            const token = jwt.sign({
                name: user.name,
                email: user.email,
                role: user.role
            },
                process.env.SECRET
            );
            await user.save();
            return res.status(200).json({ message: "User registered successfully", token, user })
        }

        if (!user.password) {
            return res.status(500).json({ message: "User password not set, cannot login" })
        }

        const Match = await bcrypt.compare(password, user.password);
        if (!Match) {
            return res.status(401).json({ message: "Invaild" })
        }
        // const token = jwt.sign({
        //     name: user.name,
        //     email: user.email,
        //     role: user.role
        // },
        //     process.env.SECRET
        // );
        return res.status(200).json({
            token,
            role: user.role,
            user
        });
    }
    catch (error) {
        console.log(error)
    }
}
export default Log;