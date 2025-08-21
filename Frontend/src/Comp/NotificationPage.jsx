// src/Component/NotificationCard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { CiBellOn } from "react-icons/ci";

export default function NotificationPage({ doctorId }) {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications for logged-in doctor
        const fetchNotifications = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/notifications");
                setNotifications(res.data);
            } catch (err) {
                console.error("Error fetching notifications:", err);
            }
        };
        fetchNotifications();
    }, [doctorId]);

    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 w-full md:w-1/3">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <CiBellOn className="w-5 h-5 text-blue-500" /> Notifications
                </h2>
                <span className="text-sm text-gray-500">
                    {notifications.length} new
                </span>
            </div>

            <div className="space-y-3 max-h-64 overflow-y-auto">
                {notifications.length > 0 ? (
                    notifications.map((note, index) => (
                        <div
                            key={index}
                            className="p-3 rounded-xl bg-blue-50 border border-blue-200"
                        >
                            <p className="text-sm text-gray-700">{note.message}</p>
                            <span className="text-xs text-gray-400">
                                {new Date(note.createdAt).toLocaleString()}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">No notifications yet.</p>
                )}
            </div>
        </div>
    );
}
