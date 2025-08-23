// src/components/DoctorHistory.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Doctorside from "../Sidebar/Doctorside.jsx";

const AddHistory = () => {
    const [patients, setPatients] = useState([]); // all patients list
    const [selectedPatient, setSelectedPatient] = useState(""); // patient _id
    const [histories, setHistories] = useState([]);
    const [formData, setFormData] = useState({
        condition: "",
        medication: "",
        notes: "",
        date: "",
    });

    const token = localStorage.getItem("token");

    // const fetchPatients = async () => {
    //     try {
    //         const res = await axios.get("https://medcare-cwzf.onrender.com/api/doctor/patient", {
    //             headers: { Authorization: `Bearer ${token}` },
    //         });
    //         setPatients(res.data);
    //     } catch (err) {
    //         console.error("Error fetching patients:", err.response?.data || err.message);
    //     }
    // };

    // 🔹 Fetch histories for selected patient
    const fetchHistories = async () => {
        if (!selectedPatient) return;
        try {
            const res = await axios.get(
                `https://medtarck.onrender.com/api/history/${selectedPatient}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setHistories(res.data);
        } catch (err) {
            console.error("Error fetching history:", err.response?.data || err.message);
        }
    };



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedPatient) {
            alert("Enter  a patient  name first");
            return;
        }
        try {
            const res = await axios.post(
                "https://medtarck.onrender.com/api/history",
                {
                    patientId: selectedPatient,
                    condition: formData.condition,
                    medication: formData.medication,
                    notes: formData.notes,
                    date: formData.date,
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setHistories([res.data, ...histories]);
            setFormData({ condition: "", medication: "", notes: "", date: "" });
        } catch (err) {
            console.error("Error adding history:", err.response?.data || err.message);
        }
    };

    // useEffect(() => {
    //     fetchPatients(); // load patients for dropdown
    // }, []);

    useEffect(() => {
        fetchHistories(); // fetch history when patient changes
    }, [selectedPatient]);

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Doctorside />

            {/* Main Content */}
            <div className="flex-1 p-8">
                <h2 className="text-3xl font-bold text-teal-600 mb-6">
                    Patient Medical History
                </h2>

                {/* Patient Dropdown */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        Enter Patient Name:
                    </label>
                    <input
                        type="text"
                        placeholder="Type patient name..."
                        value={selectedPatient}
                        onChange={(e) => setSelectedPatient(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
                    />
                </div>

                {/* History Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-xl shadow-md mb-8"
                >
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Add New Record
                    </h3>
                    <input
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        placeholder="Condition"
                        className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-teal-400 outline-none"
                    />
                    <input
                        name="medication"
                        value={formData.medication}
                        onChange={handleChange}
                        placeholder="Medication"
                        className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-teal-400 outline-none"
                    />
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Notes"
                        className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-teal-400 outline-none"
                        rows="3"
                    />
                    <input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-teal-400 outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
                    >
                        Add History
                    </button>
                </form>

                {/* History Records */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        History Records
                    </h3>
                    {histories.length === 0 ? (
                        <p className="text-gray-500">No history found</p>
                    ) : (
                        <ul className="space-y-4">
                            {histories.map((h) => (
                                <li
                                    key={h._id}
                                    className="border rounded-lg p-4 shadow-sm bg-gray-50"
                                >
                                    <p>
                                        <span className="font-semibold">Condition:</span>{" "}
                                        {h.condition}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Medication:</span>{" "}
                                        {h.medication}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Notes:</span>{" "}
                                        {h.notes}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Date:</span>{" "}
                                        {new Date(h.date).toLocaleDateString()}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Doctor:</span>{" "}
                                        {h.doctor?.name || "N/A"}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddHistory;
