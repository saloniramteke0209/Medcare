import express from 'express'
import { Doctor } from '../models/Docmodels.js'
import { Patient } from '../models/Patientmodel.js'
import { Auth } from '../models/Authmodels.js'
import { Hop } from '../models/Appmodel.js'
import { Notification } from '../models/Notification.js'


export const Registerdoctor = async (req, res) => {
    try {
        const { name, email, role } = req.body
        if (!name || !email || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        const exist = await Doctor.findOne({ email })
        if (exist) {
            return res.status(400).json({ message: "Id already exist" })
        }
        const addDoctor = new Doctor({
            name,
            email,
            role

        })
        await addDoctor.save()
        const auth = new Auth({ name, email, role: "doctor" })
        await auth.save();
        await Notification.create({
            message: `New doctor registered:${addDoctor.name}`,
            type: "doctor"
        })
        return res.status(200).json({ user: addDoctor, message: "Doctor registere successfully" })
    }
    catch (error) {
        console.log(error)
    }
}

// export const AllAdm = async (req, res) => {
//     try {
//         const admin = await Admin.find()
//         res.status(200).json(admin)
//     }
//     catch (error) {
//         res.status(500).json({ message: "Error " })
//     }
// }

export const getPatient = async (req, res) => {
    try {
        const patient = await Patient.find();
        res.status(200).json(patient)
    }
    catch (error) {
        res.status(500).json({ message: "Error" })
    }
}
export const getAppointment = async (req, res) => {
    try {
        const data = await Hop.find()
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: "Error" })
    }
}
