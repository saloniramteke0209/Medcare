import React from 'react'

import Card from '../Comp/Card.jsx'

import { FaAward } from "react-icons/fa"
import Doctorside from '../Sidebar/Doctorside.jsx'
import Doctorchart from '../Doctordashboard/Doctorchart.jsx'
import Patinet from '../Doctordashboard/Patinet.jsx'


const doctordashboard = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                <Doctorside />

                <div className="p-6 bg-teal-50 flex-1">
                    {/* Top Row - Cards */}
                    <div className="flex gap-6 items-stretch mb-6">
                        <Card />

                        <div className="shadow-lg rounded-xl p-4 flex-1 min-w-[220px] h-48 flex flex-col justify-between">
                            <h2 className="text-gray-600 text-lg">Total Surgery</h2>
                            <img
                                src="https://plus.unsplash.com/premium_vector-1682270089736-01da39d8d527?w=500&auto=format&fit=crop&q=60"
                                className="w-20 h-20 object-cover mx-auto"
                            />
                        </div>

                        {/* Total Staffs */}
                        <div className="shadow-lg rounded-xl p-4 flex-1 min-w-[220px] h-48 flex flex-col justify-between">
                            <h2 className="text-gray-600 text-lg">Total Staffs</h2>
                            <img
                                src="https://plus.unsplash.com/premium_vector-1714618846503-b44d1d284c6a?q=80&w=1122&auto=format&fit=crop"
                                className="w-20 h-20 object-cover mx-auto"
                            />
                        </div>

                        {/* Total Patients */}
                        <div className="shadow-lg rounded-xl p-4 flex-1 min-w-[220px] h-48 flex flex-col justify-between">
                            <h2 className="text-gray-600 text-lg">Total Patients</h2>
                            <img
                                src="https://plus.unsplash.com/premium_vector-1682305739336-be469218b857?w=500&auto=format&fit=crop&q=60"
                                className="w-20 h-20 object-cover mx-auto"
                            />
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="shadow-lg rounded-xl p-4 mb-6">
                        <Doctorchart />
                    </div>

                    {/* Patient Stats */}
                    <div className="flex gap-6 items-stretch mb-6">
                        <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between text-center">
                            <h2 className="text-gray-600 text-lg">New Patient</h2>
                            <div className="flex justify-center items-center rounded-full p-4 bg-green-200 text-xl font-bold">
                                25
                            </div>
                        </div>
                        <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between text-center">
                            <h2 className="text-gray-600 text-lg">Old Patient</h2>
                            <div className="flex justify-center items-center rounded-full p-4 bg-red-200 text-xl font-bold">
                                20
                            </div>
                        </div>
                        <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between text-center">
                            <h2 className="text-gray-600 text-lg">Today Patient</h2>
                            <div className="flex justify-center items-center rounded-full p-4 bg-yellow-200 text-xl font-bold">
                                15
                            </div>
                        </div>
                    </div>

                    {/* Department Section */}
                    <div className="shadow-lg rounded-xl p-4 flex flex-col justify-between mb-6">
                        <Patinet />
                    </div>


                    {/* Awards Section */}
                    <div className="shadow-lg rounded-xl p-4 flex flex-col justify-between mb-6">
                        <h2 className="text-gray-700 text-xl font-bold mb-4 flex items-center">
                            <FaAward className="mr-2 text-yellow-500" /> Awards Got
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                                <div className="bg-yellow-400 text-white px-3 py-1 rounded-full mb-2 font-semibold">🏆 Best Hospital 2023</div>
                                <p className="text-gray-600 text-sm text-center">
                                    Awarded for excellence in patient care, infrastructure, and modern healthcare facilities.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                                <div className="bg-blue-400 text-white px-3 py-1 rounded-full mb-2 font-semibold">🏅 Top Doctors Award</div>
                                <p className="text-gray-600 text-sm text-center">
                                    Recognizing our doctors' dedication, expertise, and commitment to patient health and safety.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                                <div className="bg-green-400 text-white px-3 py-1 rounded-full mb-2 font-semibold">🎖 Excellence in Care</div>
                                <p className="text-gray-600 text-sm text-center">
                                    Honored for consistently delivering high-quality, patient-focused healthcare services.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Facilities Section */}
                    <div className="shadow-lg rounded-xl p-4 flex flex-col justify-between mb-6">
                        <h2 className="text-gray-700 text-xl font-bold mb-4">Facilities We Have</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg shadow p-3 text-center">
                                <p className="text-gray-800 font-semibold">Emergency Room</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-3 text-center">
                                <p className="text-gray-800 font-semibold">Laboratory</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-3 text-center">
                                <p className="text-gray-800 font-semibold">Pharmacy</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-3 text-center">
                                <p className="text-gray-800 font-semibold">Radiology</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-3 text-center">
                                <p className="text-gray-800 font-semibold">ICU</p>
                            </div>
                            <div className="bg-white rounded-lg shadow p-3 text-center">
                                <p className="text-gray-800 font-semibold">Operation Theater</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-teal-600 text-white text-center py-4 mt-auto">
                <p className="text-red-500 font-bold mb-2">Emergency Line: +91-99999-99999</p>
                <p>&copy; {new Date().getFullYear()} MedCare Hospital. All rights reserved.</p>
                <p>Designed & Developed by MedCare IT Team</p>
            </footer>
        </div>
    )
}

export default doctordashboard