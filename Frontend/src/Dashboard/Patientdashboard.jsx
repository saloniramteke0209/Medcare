import React from 'react'
import PatientHistory from '../History/PatientHistory.jsx'
import Patientchart from '../Patientdashboard/Patientchart.jsx'
import Allappointment from '../Patientdashboard/Allappointment.jsx'
import Patientside from '../Sidebar/Patientside.jsx'
import Card from '../Comp/Card.jsx'



const Patientdashboard = () => {
    return (
        <>
            <div className="flex">
                <Patientside />

                <div className="p-6 bg-teal-50 min-h-screen flex-1">
                    {/* Top Row - Greeting, Notifications, Surgery, Staffs, Patients */}
                    <div className="flex gap-6 items-stretch mb-6">
                        {/* Greeting Card */}
                        <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between">
                            <Card />
                        </div>

                        {/* Notifications */}
                        {/* <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between max-h-56 overflow-y-auto"> */}
                        <PatientHistory />
                        {/* </div> */}

                        {/* Total Surgery */}
                        <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between h-48">
                            <h2 className="text-gray-600 text-lg">Total Surgery</h2>
                            <img
                                src="https://plus.unsplash.com/premium_vector-1682270089736-01da39d8d527?w=500&auto=format&fit=crop&q=60"
                                className="w-24 h-24 object-cover mx-auto"
                            />
                        </div>

                        {/* Total Staffs */}
                        <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between h-48">
                            <h2 className="text-gray-600 text-lg">Total Staffs</h2>
                            <img
                                src="https://plus.unsplash.com/premium_vector-1714618846503-b44d1d284c6a?q=80&w=1122&auto=format&fit=crop"
                                className="w-24 h-24 object-cover mx-auto"
                            />
                        </div>

                        {/* Total Patients */}
                        <div className="shadow-lg rounded-xl p-4 flex-1 flex flex-col justify-between h-48">
                            <h2 className="text-gray-600 text-lg">Total Patient</h2>
                            <img
                                src="https://plus.unsplash.com/premium_vector-1682305739336-be469218b857?w=500&auto=format&fit=crop&q=60"
                                className="w-24 h-24 object-cover mx-auto"
                            />
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="mb-6">
                        <Patientchart />
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

                    {/* Department */}
                    <div className="shadow-lg rounded-xl p-4 flex flex-col justify-between">
                        <Allappointment />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Patientdashboard