import express from 'express'
import { Patient } from '../models/Patientmodel.js'
import { Auth } from '../models/Authmodels.js'
import { Doctor } from '../models/Docmodels.js'
// import { Hop } from '../models/Appmodel.js'


export const Registerpatient = async (req, res) => {
    try {
        const { name, email, role } = req.body
        if (!name || !email || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        const exist = await Patient.findOne({ email })
        if (exist) {
            return res.status(400).json({ message: "Id already exist" })
        }
        const addPatient = new Patient({
            name,
            email,
            role,

        })
        await addPatient.save()
        const auth = new Auth({ name, email, role: "doctor" })
        await auth.save();
        return res.status(200).json({ user: addPatient })
    }
    catch (error) {
        console.log(error)
    }
}

export const getDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.find()
        res.status(200).json(doctor)
    }
    catch (error) {
        res.status(500).json({ message: "Error " })
    }
}

// export const Allapp = async (req, res) => {
//     try {
//         const appointmentDate = await Hop.find()
//         res.status(200).json(appointmentDate)
//     }
//     catch (error) {
//         res.status(500).json({ message: "Error" })
//     }
// }






