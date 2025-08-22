// controllers/historyController.js
import jwt from "jsonwebtoken";
import { Patient } from "../models/Patientmodel.js";
import { Doctor } from "../models/Docmodels.js";
import History from "../models/History.js";

const JWT_SECRET = process.env.SECRET // better: process.env.JWT_SECRET

/**
 * Helper: Get logged-in user from JWT
 */
const getUserFromReq = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error("No token provided");

    const token = authHeader.split(" ")[1];
    if (!token) throw new Error("No token provided");

    return jwt.verify(token, process.env.SECRET);
    // returns { id, email, role }
};

/**
 * Doctor adds a new medical history entry for a patient
 */
export const addHistory = async (req, res) => {
    try {
        const user = getUserFromReq(req);

        if (user.role !== "doctor") {
            return res.status(403).json({ error: "Only doctors can add history" });
        }

        // const doctor = await Doctor.findOne({ email: user.email });
        // if (!doctor) return res.status(404).json({ error: "Doctor not found" });

        const { patient, condition, medication, notes, date } = req.body;

        // patient can be passed as ID or name
        let patientDoc = await Patient.findById(patient);
        if (!patientDoc) {
            patientDoc = await Patient.findOne({ name: patient });
        }
        if (!patientDoc) return res.status(404).json({ error: "Patient not found" });

        const history = await History.create({
            patient,
            doctor: user._id,
            condition,
            medication,
            notes,
            date,
        });

        res.status(201).json(history);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
};

/**
 * Get medical history for a patient (by ID or name)
 */
export const getHistoryByPatient = async (req, res) => {
    try {
        const user = getUserFromReq(req);

        if (user.role !== "doctor") {
            return res.status(403).json({ error: "Only doctors can view patient histories" });
        }

        const { patientId } = req.params;

        const histories = await History.find({ patient: patientId })
            .populate("doctor", "name email")
            .populate("patient", "name email")
            .sort({ date: -1 });

        res.json(histories);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

/**
 * Doctor updates an existing history entry
 */
export const getMyHistory = async (req, res) => {
    try {
        const user = getUserFromReq(req);

        if (user.role !== "patient") {
            return res.status(403).json({ error: "Only patients can access this route" });
        }

        const histories = await History.find({ patient: user.id })
            .populate("doctor", "name email")
            .populate("patient", "name email")
            .sort({ date: -1 });

        res.json(histories);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

