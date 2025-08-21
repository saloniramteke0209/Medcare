// controller/NotificationController.js
import { Notification } from "../models/Notification.js";

export const getNotifications = async (req, res) => {
    try {
        const notes = await Notification.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ message: "Error fetching notifications" });
    }
};
