import React from 'react';
import Doctorside from '../Sidebar/Doctorside.jsx';
import Doctorchart from '../Doctordashboard/Doctorchart.jsx';
import Patinet from '../Doctordashboard/Patinet.jsx';
import Card from '../Comp/Card.jsx';

const Doctordashboard = () => {
    // Random stats for demonstration
    const stats = {
        totalSurgery: 12,
        totalStaff: 8,
        totalPatients: 45,
    };

    return (
        <div className="flex">
            <Doctorside />

            <div className="p-6 bg-teal-50 min-h-screen flex-1">
                {/* Top Row - Greeting, Surgery, Staffs, Patients */}
                <div className="flex gap-6 items-stretch mb-6">
                    {/* Greeting Card */}
                    <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between">
                        <Card />
                    </div>

                    {/* Total Surgery */}
                    <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between h-48">
                        <h2 className="text-gray-600 text-lg">Total Surgery</h2>
                        <img
                            src="https://plus.unsplash.com/premium_vector-1682270089736-01da39d8d527?w=500&auto=format&fit=crop&q=60"
                            className="w-24 h-24 object-cover mx-auto"
                        />
                        <span className="text-xl font-bold text-teal-600 mt-2 text-center">{stats.totalSurgery}</span>
                    </div>

                    {/* Total Staffs */}
                    <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between h-48">
                        <h2 className="text-gray-600 text-lg">Total Staffs</h2>
                        <img
                            src="https://plus.unsplash.com/premium_vector-1714618846503-b44d1d284c6a?q=80&w=1122&auto=format&fit=crop"
                            className="w-24 h-24 object-cover mx-auto"
                        />
                        <span className="text-xl font-bold text-teal-600 mt-2 text-center">{stats.totalStaff}</span>
                    </div>

                    {/* Total Patients */}
                    <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between h-48">
                        <h2 className="text-gray-600 text-lg">Total Patients</h2>
                        <img
                            src="https://plus.unsplash.com/premium_vector-1682305739336-be469218b857?w=500&auto=format&fit=crop&q=60"
                            className="w-24 h-24 object-cover mx-auto"
                        />
                        <span className="text-xl font-bold text-teal-600 mt-2 text-center">{stats.totalPatients}</span>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="mb-6 shadow-lg rounded-xl p-4">
                    <Doctorchart />
                </div>

                {/* Patient Stats */}
                <div className="flex gap-6 items-stretch mb-6">
                    <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between">
                        <h2 className="text-gray-600 text-lg">New Patient</h2>
                        <div className="flex justify-center items-center rounded-full p-4 bg-green-200 text-xl font-bold">
                            25
                        </div>
                    </div>

                    <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between">
                        <h2 className="text-gray-600 text-lg">Old Patient</h2>
                        <div className="flex justify-center items-center rounded-full p-4 bg-red-200 text-xl font-bold">
                            20
                        </div>
                    </div>

                    <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between">
                        <h2 className="text-gray-600 text-lg">Today Patient</h2>
                        <div className="flex justify-center items-center rounded-full p-4 bg-yellow-200 text-xl font-bold">
                            15
                        </div>
                    </div>
                </div>

                {/* Department / Patients List */}
                <div className="shadow-lg rounded-xl p-4 flex flex-col justify-between">
                    <Patinet />
                </div>


            </div>
        </div>
    );
};

export default Doctordashboard;
