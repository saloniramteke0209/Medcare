import React from "react";
import axios from 'axios';
import { useState } from 'react'


const Appointment = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [record, setRecord] = useState('');
    const [reason, setReason] = useState('');
    const [department, setDepartment] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const [errors, setError] = useState({});
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Name is required";
        if (!number.trim()) newErrors.number = "Phone number is required";
        if (!age.trim()) newErrors.age = "Age is required";
        if (!gender) newErrors.gender = "Please select gender";
        if (!reason.trim()) newErrors.reason = "Reason for visit is required";
        if (!department) newErrors.department = "Please select a department";
        if (!date) newErrors.date = "Please select a date";
        if (!time) newErrors.time = "Please select a time";
        return newErrors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});
        setSuccess("");
        setLoading(true);

        // Validation
        const newErrors = validate();
        // if (!name.trim()) newErrors.name = "Name is required";
        // if (!number.trim()) newErrors.number = "Phone number is required";
        // if (!age.trim() || isNaN(Number(age)) || Number(age) <= 0) newErrors.age = "Valid age is required";
        // if (!gender) newErrors.gender = "Please select gender";
        // if (!reason.trim()) newErrors.reason = "Reason for visit is required";
        // if (!department) newErrors.department = "Please select a department";
        // if (!date) newErrors.date = "Please select a date";
        // if (!time) newErrors.time = "Please select a time";

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            setLoading(false);
            return;
        }

        try {
            //  Generate unique Record if not provided
            const uniqueRecord = record.trim() ? record : Date.now().toString();

            const payload = {
                Name: name.trim(),
                Number: number.trim(),
                Record: uniqueRecord,
                Reason: reason.trim(),
                Department: department,
                Age: Number(age),
                Gender: gender,
                Date: date,
                Time: time
            };

            console.log("Sending payload:", payload);

            const response = await axios.post(
                "https://medcare-cwzf.onrender.com/api/appointment",
                payload,
                { headers: { "Content-Type": "application/json" } }
            );

            console.log("Backend response:", response.data);

            setSuccess("Appointment submitted successfully!");
            // Reset form
            setName("");
            setNumber("");
            setRecord("");
            setReason("");
            setDepartment("");
            setAge("");
            setGender("");
            setDate("");
            setTime("");
        } catch (error) {
            console.error("Axios Error Full:", error);
            console.error("Error response:", error.response);
            setError({ api: error.response?.data?.message || "Error submitting appointment. Please try again." });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex items-center bg-white p-6 rounded-lg shadow">
            <div className="flex-1"></div>
            <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Appointment</h2>
                    {success && (
                        <div className="mb-4 p-3 rounded bg-green-100 text-green-700 text-sm">
                            {success}
                        </div>
                    )}

                    {/* API Error */}
                    {errors.api && (
                        <div className="mb-4 p-3 rounded bg-red-100 text-red-700 text-sm">
                            {errors.api}
                        </div>
                    )}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className={`w-full p-2 mb-1 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"
                                    }`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs">{errors.name}</p>
                            )}
                        </div>

                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                className={`w-full p-2 mb-1 border rounded-md ${errors.number ? "border-red-500" : "border-gray-300"
                                    }`}
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                            {errors.number && (
                                <p className="text-red-500 text-xs">{errors.number}</p>
                            )}
                        </div>
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Patient Age
                        </label>
                        <input
                            type="text"
                            placeholder="Age"
                            className={`w-full p-2 mb-1 border rounded-md ${errors.age ? "border-red-500" : "border-gray-300"
                                }`}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Patient Record ID
                        </label>
                        <input
                            type="text"
                            placeholder="Record ID"
                            className={`w-full p-2 mb-1 border rounded-md ${errors.record ? "border-red-500" : "border-gray-300"
                                }`}
                            value={record}
                            onChange={(e) => setRecord(e.target.value)}
                        />
                        {errors.record && <p className="text-red-500 text-xs">{errors.record}</p>}
                    </div>

                    {/* Gender */}
                    <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Gender
                        </label>
                        <select
                            className={`w-full px-4 py-2 border rounded-md ${errors.gender ? "border-red-500" : "border-gray-300"
                                }`}
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                        </select>
                        {errors.gender && (
                            <p className="text-red-500 text-xs">{errors.gender}</p>
                        )}
                    </div>

                    {/* Reason */}
                    <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Reason for Visit
                        </label>
                        <input
                            type="text"
                            placeholder="Type your Reason"
                            className={`w-full p-2 mb-1 border rounded-md ${errors.reason ? "border-red-500" : "border-gray-300"
                                }`}
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                        {errors.reason && (
                            <p className="text-red-500 text-xs">{errors.reason}</p>
                        )}
                    </div>

                    {/* Department */}
                    <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Department
                        </label>
                        <select
                            className={`w-full px-4 py-2 border rounded-md ${errors.department ? "border-red-500" : "border-gray-300"
                                }`}
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            <option value="">Select Department</option>
                            <option value={"Cardiology"}>Cardiology</option>
                            <option value={"Neurology"}>Neurology</option>
                            <option value={"Orthopedics"}>Orthopedics</option>
                            <option value={"Pediatrics"}>Pediatrics</option>
                            <option value={"Gynecology"}>Gynecology</option>
                            <option value={"Dermatology"}>Dermatology</option>
                            <option value={"Psychiatry"}>Psychiatry</option>
                            <option value={"ENT"}>ENT</option>
                            <option value={"Ophthalmology"}>Ophthalmology</option>
                            <option value={"Surgery"}>Surgery</option>
                            <option value={"Physiotherapy"}>Physiotherapy</option>
                        </select>
                        {errors.department && (
                            <p className="text-red-500 text-xs">{errors.department}</p>
                        )}
                    </div>

                    {/* Date & Time */}
                    <div className="flex flex-col md:flex-row gap-6 mt-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Preferred Date
                            </label>
                            <input
                                type="date"
                                className={`w-full px-4 py-2 border rounded-md ${errors.date ? "border-red-500" : "border-gray-300"
                                    }`}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            {errors.date && (
                                <p className="text-red-500 text-xs">{errors.date}</p>
                            )}
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Preferred Time
                            </label>
                            <input
                                type="time"
                                className={`w-full px-4 py-2 border rounded-md ${errors.time ? "border-red-500" : "border-gray-300"
                                    }`}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            {errors.time && (
                                <p className="text-red-500 text-xs">{errors.time}</p>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-6 px-6 py-2 rounded-md font-medium text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
            <div className="w-1/2 flex justify-center">
                <img src="https://plus.unsplash.com/premium_vector-1683140516335-4ef582a97707?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Appointment Illustration" className="max-w-full h-auto rounded-md" />
            </div>
        </div>

    );
};

export default Appointment;