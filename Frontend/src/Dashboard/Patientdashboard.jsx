import React from "react";
import Patientside from "../Sidebar/Patientside.jsx";
import Card from "../Comp/Card.jsx";
import PatientHistory from "../History/PatientHistory.jsx";
import Patientchart from "../Patientdashboard/Patientchart.jsx";


const Patientdashboard = () => {
    return (
        <div className="flex min-h-screen bg-teal-50">
            {/* Sidebar */}
            <Patientside />

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Top Row - Greeting, History, Surgery, Staffs, Patients */}
                <div className="flex gap-4 flex-wrap mb-6">
                    {/* Greeting Card */}
                    <div className="shadow-lg rounded-xl p-4 flex-1 min-w-[220px] h-48 flex flex-col justify-between">
                        <Card />
                    </div>

                    {/* Patient History Card */}
                    <div className="shadow-lg rounded-xl p-4 flex-1 min-w-[220px] h-48 flex flex-col justify-between">
                        <PatientHistory />
                    </div>

                    {/* Total Surgery */}
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
                <div className="mb-6 shadow-lg rounded-xl p-4">
                    <Patientchart />
                </div>

                {/* Patient Stats */}
                <div className="flex gap-4 flex-wrap mb-6">
                    <div className="shadow-lg rounded-xl p-4 flex-1 min-w-[200px] h-32 flex flex-col justify-center items-center">
                        <h2 className="text-gray-600 text-lg">New Patient</h2>
                        <div className="flex justify-center items-center rounded-full p-4 bg-green-200 text-xl font-bold">
                            25
                        </div>
                    </div>

                    <div className="shadow-lg rounded-xl p-4 flex-1 min-w-[200px] h-32 flex flex-col justify-center items-center">
                        <h2 className="text-gray-600 text-lg">Old Patient</h2>
                        <div className="flex justify-center items-center rounded-full p-4 bg-red-200 text-xl font-bold">
                            20
                        </div>
                    </div>

                    <div className="shadow-lg rounded-xl p-4 flex-1 min-w-[200px] h-32 flex flex-col justify-center items-center">
                        <h2 className="text-gray-600 text-lg">Today Patient</h2>
                        <div className="flex justify-center items-center rounded-full p-4 bg-yellow-200 text-xl font-bold">
                            15
                        </div>
                    </div>
                </div>
                <div className="shadow-lg rounded-xl p-6 bg-white mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Facilities We Have</h2>
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                        <li>✅ 24/7 Emergency Care</li>
                        <li>✅ Advanced Operation Theatres</li>
                        <li>✅ Diagnostic & Imaging Services</li>
                        <li>✅ Pharmacy & Laboratory</li>
                        <li>✅ Specialist Consultations</li>
                    </ul>
                </div>

                {/* Awards Section */}
                <div className="shadow-lg rounded-xl p-6 bg-white mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Awards We Got</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Best Multi-speciality Hospital 2024</li>
                        <li>National Healthcare Excellence Award</li>
                        <li>Patient Care & Safety Recognition</li>
                        <li>Top Rated Hospital in India</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Patientdashboard;
