import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    review: {
        type: String,
        required: true
    },
    isLoggedIn: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

export const Contact = mongoose.model('Contact', contactSchema)