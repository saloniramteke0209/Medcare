import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
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

export const Review = mongoose.model('Review', reviewSchema)