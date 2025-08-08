import express from 'express'
import { Admin } from '../models/Adminmodel.js'
import { Doctor } from '../models/Docmodels.js'
import { Patient } from '../models/Patientmodel.js'
import { Auth } from '../models/Authmodels.js'

export const Registeradmin = async (req, res) => {
    try {
        const { name, email, role } = req.body
        if (!name || !email || !role) {
            return res.status(400).json({ message: "Fill all information" })
        }
        const exist = await Admin.findOne({ email })
        if (exist) {
            return res.status(400).json({ message: "Id already exist" })
        }
        const addAdmin = new Admin({
            name,
            email,
            role
        })
        await addAdmin.save()
        const auth = new Auth({ name, email, role: "admin" })
        await auth.save();
        // return res.status(200).json({ user: auth })
        return res.status(200).json({ user: addAdmin });
    }
    catch (error) {
        console.log(error)
    }
}

export const getDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.find()
        console.log(doctor)
        res.status(200).json(doctor)
    }
    catch (error) {
        res.status(500).json({ message: "Error " })
    }
}

export const getPatient = async (req, res) => {
    try {
        const patient = await Patient.find();
        res.status(200).json(patient)
    }
    catch (error) {
        res.status(500).json({ message: "Error" })
    }
}