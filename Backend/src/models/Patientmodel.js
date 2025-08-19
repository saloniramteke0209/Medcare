import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    // status: {
    //     type: String,
    //     enum: ["pending", "approved", "rejected"], default: "pending"
    // },
    isLoggedIn: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

export const Patient = mongoose.model('Patient', patientSchema)