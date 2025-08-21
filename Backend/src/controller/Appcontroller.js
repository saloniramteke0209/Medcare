import express from 'express'
import { Hop } from '../models/Appmodel.js';


export const Registerappointment = async (req, res) => {
    try {
        const { Name, Number, Record, Reason, Department, Date, Time } = req.body || {};

        if (!Name || !Number || !Record || !Reason || !Department || !Date || !Time) {
            return res.status(400).json({ message: "Fill the all information" })
        }
        const exist = await Hop.findOne({ Record })
        if (exist) {
            return res.status(409).json({ message: "Record is already used" })
        }
        const addObj = new Hop({
            Name,
            Number,
            Record,
            Reason,
            Department,
            Date,
            Time,
            status: "pending"
        });
        await addObj.save();
        return res.status(201).json({ user: addObj })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server error" });
    }
}

export const getAppointment = async (req, res) => {
    try {
        const allappointment = await Hop.find()
        res.status(200).json(allappointment)
    }
    catch (error) {
        res.status(500).json({ message: "Error" })
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const appointmentId = req.params.id;

        const updatedAppointment = await Hop.findByIdAndUpdate(
            appointmentId,
            { status },
            { new: true }
        );

        if (!updatedAppointment)
            return res.status(404).json({ message: "Appointment not found" });

        res.json(updatedAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
