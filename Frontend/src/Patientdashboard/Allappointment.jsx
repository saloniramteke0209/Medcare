import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GoPerson } from 'react-icons/go';


function Allappointment() {
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        const fetchAppoinment = async () => {
            try {
                const appoinmentRes = await axios.get(' https://medtarck.onrender.com/api/appointment/allapponiment')
                setAppointment(appoinmentRes.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchAppoinment();
    }, []);
    const getStatusBadge = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-200 text-yellow-800';
            case 'approved':
                return 'bg-green-300 text-green-800';
            case 'rejected':
                return 'bg-red-300 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }
    const [showAll, setShowAll] = useState(false);

    const visible = showAll ? appointment : appointment.slice(0, 3);
    return (
        <div>


            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6 text-gray-700">All Appointments</h1>

                {appointment.length === 0 ? (
                    <p className="text-gray-500">No appointments found.</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visible.map((app) => (
                                <div
                                    key={app._id}
                                    className="p-4 border rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white"
                                >
                                    <div className="flex justify-center mb-4">
                                        <GoPerson className="w-16 h-16 rounded-full object-cover border-4 border-teal-600" />
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-800">{app.Name}</h2>

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

                        {/* View More / View Less Button */}
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                {showAll ? "View Less" : "View More"}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>

    )
}

export default Allappointment
