import React from "react";
import axios from 'axios';
import { useState } from 'react'
import Patientside from "../Sidebar/Patientside";

const Appointment = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [record, setRecord] = useState('');
    const [reason, setReason] = useState('');
    const [department, setDepartment] = useState('');
    const [age, setAge] = useState('');
    const [history, setHistory] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(' http://localhost:3000/api/appointment/', {
                Name: name,
                Number: number,
                Record: record,
                Reason: reason,
                Department: department,
                Age: age,
                History: history,
                Date: date,
                Time: time
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert("Submitting appointment")
        }
        catch (error) {
            console.log(error.message)
            alert("Error submitting appointment")
        }
    }
    return (
        <div className="flex items-center bg-white p-6 rounded-lg shadow">
            <div className="flex-1"></div>
            <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Appointment</h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className='w-full p-2 mb-4 border border-gray-300 rounded-md bg-gray-50  placeholder-gray-800'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                className="w-full p-2 mb-4 border border-gray-300  rounded-md bg-gray-50 placeholder-gray-800"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />

                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Medical Record Number</label>
                        <input
                            type="text"
                            placeholder="e.g. 12345-7890-0021"
                            className="w-full p-2 mb-4 border border-gray-300  rounded-md  bg-gray-50 placeholder-gray-800"
                            value={record}
                            onChange={(e) => setRecord(e.target.value)}
                        />

                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Patient Age</label>
                        <input
                            type="text"
                            placeholder="Age"
                            className="w-full p-2 mb-4 border border-gray-300  rounded-md  bg-gray-50 placeholder-gray-800"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />

                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Patient History</label>
                        <input
                            type="text"
                            placeholder="Type your History"
                            className="w-full p-2 mb-4 border border-gray-300  rounded-md  bg-gray-50 placeholder-gray-800"
                            value={history}
                            onChange={(e) => setHistory(e.target.value)}
                        />

                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-gray-800 font-medium text-sm mb-1">Gender</label>
                            <select className="w-full px-4 py-2 border border-gray-300  rounded-md bg-white" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value={""}>Select Gender</option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-gray-800 font-medium text-sm mb-1">Reason for Visit</label>
                            <input
                                type="text"
                                placeholder="Type your Reason"
                                className="w-full p-2 mb-4 border border-gray-300  rounded-md  bg-gray-50 placeholder-gray-800"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm text-gray-800 font-medium mb-1">Department</label>
                            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white" value={department} onChange={(e) => setDepartment(e.target.value)}>
                                <option value={""}>Select Departement</option>
                                <option value={"Cardiology"}>Cardiology</option>
                                <option value={"Neurology"}>Neurology</option>
                                <option value={"Orthopedics"}>Orthopedics</option>
                                <option value={"Pediatrics"}>Pediatrics</option>
                                <option value={"Gynecology"}>Gynecology</option>
                                <option value={"Dermatology"}>Dermatology</option>
                                <option value={"Psychiatry"}>Psychiatry</option>
                                <option value={"ENT"}>ENT (Ear, Nose & Throat)</option>
                                <option value={"Ophthalmology"}>Ophthalmology</option>
                                <option value={"Surgery"}>Surgery</option>
                                <option value={"Physiotherapy"}>Physiotherapy</option>
                            </select>

                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full">
                            <label className="block text-sm text-gray-800 font-medium mb-1">Preferred Date</label>
                            <input
                                type="date"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />

                        </div>
                        <div className="w-full">
                            <label className="block text-sm text-gray-800 font-medium mb-1">Preferred Time</label>
                            <input
                                type="time"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />

                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium"
                    >
                        Submit
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