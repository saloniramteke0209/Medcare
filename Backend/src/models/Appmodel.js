import mongoose from "mongoose";

const hopSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Number: {
        type: Number,
        required: true,
        trim: true
    },
    Record: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    Reason: {
        type: String,
        required: true,
        trim: true
    },
    Department: {
        type: String,
        required: true,
        trim: true
    },
    Date: {
        type: String,
        required: true,
        trim: true
    },
    Time: {
        type: String,
        required: true,
        trim: true
    },
    Age: {
        type: String,
        required: true,
        trim: true
    },
    History: {
        type: String,
        required: true,
        trim: true
    }, status: {
        type: String,
        enum: ["pending", "approved", "rejected"], default: "pending"
    },
    isLoggedIn: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export const Hop = mongoose.model('Hop', hopSchema);