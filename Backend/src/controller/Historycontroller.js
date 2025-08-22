// controllers/historyController.js
import jwt from "jsonwebtoken";
import { Patient } from "../models/Patientmodel.js";
import { Doctor } from "../models/Docmodels.js";
import History from "../models/History.js";

const SECRET = "myscert"; // better: process.env.JWT_SECRET

/**
 * Helper: Get logged-in user from JWT
 */
const getUserFromReq = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error("No token provided");

    const token = authHeader.split(" ")[1];
    if (!token) throw new Error("No token provided");

    return jwt.verify(token, SECRET);
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

        const doctor = await Doctor.findOne({ email: user.email });
        if (!doctor) return res.status(404).json({ error: "Doctor not found" });

        const { patient, condition, medication, notes, date } = req.body;

        // patient can be passed as ID or name
        let patientDoc = await Patient.findById(patient);
        if (!patientDoc) {
            patientDoc = await Patient.findOne({ name: patient });
        }
        if (!patientDoc) return res.status(404).json({ error: "Patient not found" });

        const history = await History.create({
            patient: patientDoc._id,
            doctor: doctor._id,
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
        let { patientId } = req.params;

        // If patientId looks like a name, resolve it
        let patientDoc = null;
        if (/^[0-9a-fA-F]{24}$/.test(patientId)) {
            patientDoc = await Patient.findById(patientId);
        } else {
            patientDoc = await Patient.findOne({ name: patientId });
        }
        if (!patientDoc) return res.status(404).json({ error: "Patient not found" });

        // patient can only see their own history
        if (user.role === "patient" && String(user.id) !== String(patientDoc._id)) {
            return res.status(403).json({ error: "Cannot view another patient’s history" });
        }

        // doctor must exist
        if (user.role === "doctor") {
            const doctorExists = await Doctor.findById(user.id);
            if (!doctorExists) return res.status(404).json({ error: "Doctor not found" });
        }

        const list = await History.find({ patient: patientDoc._id })
            .populate("doctor", "name email")
            .populate("patient", "name email")
            .sort({ date: -1 });

        res.json(list);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

/**
 * Doctor updates an existing history entry
 */
export const updateHistory = async (req, res) => {
    try {
        const user = getUserFromReq(req);
        const { id } = req.params;

        if (user.role !== "doctor") {
            return res.status(403).json({ error: "Only doctors can update history" });
        }

        const history = await History.findById(id);
        if (!history) return res.status(404).json({ error: "History not found" });

        // only the doctor who created it can edit
        if (String(history.doctor) !== String(user.id)) {
            return res.status(403).json({ error: "Not your history record" });
        }

        const { condition, medication, notes, date } = req.body;
        if (condition) history.condition = condition;
        if (medication) history.medication = medication;
        if (notes) history.notes = notes;
        if (date) history.date = date;

        await history.save();
        res.json(history);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
