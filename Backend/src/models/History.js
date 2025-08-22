
import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true
        },
        condition: {
            type: String,
            required: true,
            trim: true
        },
        medication: {
            type: String,
            trim: true
        },
        notes: {
            type: String,
            trim: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

export default mongoose.model("History", historySchema);
