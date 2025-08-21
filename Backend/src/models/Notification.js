import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    message: { type: String, required: true },
    type: { type: String, enum: ["doctor", "patient", "admin"], required: true },
    createdAt: { type: Date, default: Date.now },
    seen: { type: Boolean, default: false } // admin can mark as read
});

export const Notification = mongoose.model("Notification", NotificationSchema);
