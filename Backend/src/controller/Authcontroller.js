
import jwt from 'jsonwebtoken';
import { Admin } from '../models/Adminmodel.js';
import { Doctor } from '../models/Docmodels.js';
import { Patient } from '../models/Patientmodel.js';
import { Auth } from '../models/Authmodels.js';

const Log = async (req, res) => {
    try {
        let { name, email, role } = req.body
        console.log("Received login request:", req.body);

        if (!name || !email || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        let roleuser;
        if (role.toLowerCase() === 'admin') {
            roleuser = await Admin.findOne({ name, email })
            if (!roleuser) {
                roleuser = await Admin.create({ name, email, role: 'admin' });
            }
        }
        else if (role.toLowerCase() === 'doctor') {
            roleuser = await Doctor.findOne({ name, email })
            if (!roleuser) {
                //     roleuser = await Doctor.create({ name, Id, department, schedule, role: 'doctor', isBusy: isBusy ?? true })
                //     console.log("Doctor Data:", roleuser);
            }
            roleuser = await Doctor.create({ name, email, role: 'doctor' })
            console.log("Doctor Data:", roleuser);
        }
        else if (role.toLowerCase() === 'patient') {
            roleuser = await Patient.findOne({ name, email })
            if (!roleuser) {
                roleuser = await Patient.create({ name, email, role: 'patient' })
            }
        }
        if (!roleuser) {
            console.log(" User not found in role model");
            return res.status(404).json({ message: "User not found" });
        }
        let user = await Auth.findOne({ name, email });
        if (!user) {
            user = new Auth({ name, email, role });
            await user.save();
            // return res.status(400).json({ user: user })
        }
        const token = jwt.sign({
            name: user.name,
            email: user._email,
            role: user.role
        },
            process.env.SECRET
        );
        return res.status(200).json({
            token,
            name,
            role: user.role,
            user
        });
    }
    catch (error) {
        console.log(error)
    }
}
export default Log;