import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Adminside from '../Sidebar/Adminside.jsx'
import { GoPerson } from 'react-icons/go'

const Getappointment = () => {
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        const fetchAppoinment = async () => {
            try {
                const appoinmentRes = await axios.get('https://medcare-cwzf.onrender.com/api/appointment/allapponiment')
                setAppointment(appoinmentRes.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchAppoinment();
    }, []);
    const getStatusBadge = (status) => {
        switch (status?.toLowerCase()) {
            case "pending":
                return <span className="text-yellow-500">Pending</span>;
            case "approved":
                return <span className="text-green-500">Approved</span>;
            case "rejected":
                return <span className="text-red-500">Rejected</span>;
            default:
                return <span className="text-gray-500">Unknown</span>;
        }
    }
    return (
        <div>

            <div className='flex'>

                <Adminside />

                <main className="flex-1 p-6 ml-16">
                    <h1 className="text-2xl font-bold mb-6 text-gray-700">All Appointments</h1>

                    {appointment.length === 0 ? (
                        <p className="text-gray-500">No appointments found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {appointment.map((app) => (
                                <div
                                    key={app._id}
                                    className="p-4 border rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white"
                                >

                                    <div className="flex justify-center mb-4">
                                        <GoPerson
                                            className="w-15 h-15 rounded-full object-cover border-4 border-teal-600"
                                        />
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-800">{app.Name}</h2>
                                    <p className="text-gray-600"><strong>Phone:</strong> {app.Number}</p>
                                    <p className="text-gray-600"><strong>Department:</strong> {app.Department}</p>
                                    <p className="text-gray-600"><strong>Date:</strong> {new Date(app.Date).toLocaleDateString()}</p>
                                    <span
                                        className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(app.status)}`}
                                    >
                                        {app.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}

export default Getappointment
