import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Doctorside from '../Sidebar/Doctorside';
import { GoPerson } from 'react-icons/go';

const Patientappointment = () => {
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/appointment/allapponiment');
                setAppointment(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAppointment();
    }, []);

    const handleStatusUpdate = (id, status) => {
        axios.put(`http://localhost:3000/api/appointment/${id}/status`, { status })
            .then(res => {
                setAppointment(prev => prev.map(app => app._id === id ? res.data : app));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='flex '>

            <Doctorside />

            <main className="flex-1 p-6 ml-16">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">All Appointments</h1>

                {appointment.length === 0 ? (
                    <p className="text-gray-500">No appointments found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {appointment.map(app => (
                            <div
                                key={app._id}
                                className="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition"
                            >

                                <div className="flex justify-center mb-4">
                                    <GoPerson
                                        className="w-15 h-15 rounded-full object-cover border-4 border-teal-600"
                                    />
                                </div>
                                <p><strong>Patient:</strong> {app.Name}</p>
                                <p><strong>Phone:</strong> {app.Number}</p>
                                <p><strong>Date:</strong> {app.Date}</p>
                                <p><strong>Status:</strong> {app.status}</p>

                                {app.status?.toLowerCase() === "pending" && (
                                    <div className="mt-3 flex gap-2">
                                        <button
                                            className="flex-1 px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700"
                                            onClick={() => handleStatusUpdate(app._id, "approved")}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            onClick={() => handleStatusUpdate(app._id, "rejected")}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Patientappointment;
