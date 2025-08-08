import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
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
    },
}, { timestamps: true })

export const Admin = mongoose.model('Admin', adminSchema)