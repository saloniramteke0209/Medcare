import React from 'react'
import { Outlet } from 'react-router-dom'
import Patientside from '../Sidebar/Patientside.jsx'


const Patientdashboard = () => {
    return (
        <>
            <div className='flex min-h-screen bg-gray-100'>
                <div className='w-64 bg-white shadow-lg'>
                    < Patientside />
                </div>

                <div className="min-h-screen bg-gray-100 p-6">
                    <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">Appointments Today</h2>
                            <p className="text-4xl font-bold text-blue-600">12</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">Patients</h2>
                            <p className="text-4xl font-bold text-green-600">45</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">Pending Reports</h2>
                            <p className="text-4xl font-bold text-yellow-600">5</p>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Patientdashboard