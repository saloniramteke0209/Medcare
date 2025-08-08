import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
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
    isLoggedIn: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

export const Doctor = mongoose.model('Doctor', doctorSchema)