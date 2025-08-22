import express from 'express'
import { Hop } from '../models/Appmodel.js';


export const Registerappointment = async (req, res) => {

    try {
        console.log("Incoming Body:", req.body);
        const { Name, Number: PhoneNumber, Record, Reason, Department, Date, Time, Age, Gender } = req.body || {};

        if (!Name || !PhoneNumber || !Reason || !Department || !Date || !Time || !Age || !Gender) {
            return res.status(400).json({ message: "Fill the all information" })
        }

        const recordId = Record?.trim() || Date.now().toString();

        const exist = await Hop.findOne({ Record: recordId })
        if (exist) {
            return res.status(409).json({ message: "Record is already used" })
        }

        const ageNum = Number(Age);
        if (isNaN(ageNum) || ageNum <= 0) {
            return res.status(400).json({ message: "Invalid Age" });
        }


        const addObj = new Hop({
            Name,
            Number: PhoneNumber,
            Record: recordId,
            Reason,
            Department,
            Date,
            Time,
            Age: ageNum,
            Gender,
            status: "pending"
        });
        await addObj.save();
        return res.status(201).json({ user: addObj })
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Server error",
            error: error.message,
            name: error.name,
            stack: error.stack
        });
        // return res.status(500).json({ message: "Server error", error: error.message });
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
        console.log("Axios error", error)
        console.log("Response", error.response)
        res.status(500).json({ message: "Server error" });
    }
};
