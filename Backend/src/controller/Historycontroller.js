// controllers/historyController.js
import jwt from "jsonwebtoken";
// import { Patient } from "../models/Patientmodel.js";
// import { Doctor } from "../models/Docmodels.js";
import History from "../models/History.js";

const JWT_SECRET = process.env.SECRET // better: process.env.JWT_SECRET

/**
 * Helper: Get logged-in user from JWT
 */
const getUserFromReq = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error("No token provided");

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded; // now req.user = { id, email, role }
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid token" });
    }
};

/**
 * Doctor adds a new medical history entry for a patient
 */
export const addHistory = async (req, res) => {
    try {
        if (req.user.role !== "doctor") {
            return res.status(403).json({ error: "Only doctors can add history" });
        }

        const { patientId, condition, medication, notes, date } = req.body;

        const newHistory = new History({
            patient: patientId,
            condition,
            medication,
            notes,
            date,
            doctor: req.user.id,
        });
        await newHistory.save();
        res.status(201).json(newHistory);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Get medical history for a patient (by ID or name)
 */
export const getHistoryByPatient = async (req, res) => {
    try {
        const { patientId } = req.params;

        // Patient can view ONLY their own history
        if (req.user.role === "patient" && req.user.id !== patientId) {
            return res.status(403).json({ error: "Cannot view another patient’s history" });
        }

        const histories = await History.find({ patient: patientId }).populate("addedBy", "name role");
        res.json(histories);

    } catch (err) {
        res.status(500).json({ error: err.message });
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

