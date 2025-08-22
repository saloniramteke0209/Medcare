// src/components/PatientHistory.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientHistory = () => {
    const [histories, setHistories] = useState([]);
    const token = localStorage.getItem("token");

    const fetchHistories = async () => {
        try {
            // Assuming backend extracts patient ID from JWT
            const token = localStorage.getItem("token")
            const res = await axios.get(" https://medtarck.onrender.com/api/history/me", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setHistories(res.data);
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    };

    useEffect(() => {
        fetchHistories();
    }, []);

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">My Medical History</h2>
            {histories.length === 0 ? (
                <p>No history available</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {histories.map((h) => (
                        <div key={h._id} className="border p-4 rounded shadow bg-white">
                            <p><strong>Condition:</strong> {h.condition}</p>
                            <p><strong>Medication:</strong> {h.medication}</p>
                            <p><strong>Notes:</strong> {h.notes}</p>
                            <p><strong>Date:</strong> {new Date(h.date).toLocaleDateString()}</p>
                            <p><strong>Doctor:</strong> {h.doctor?.name || "N/A"}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PatientHistory;
