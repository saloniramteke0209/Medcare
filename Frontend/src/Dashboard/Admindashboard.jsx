import React from 'react'

import Adminside from '../Sidebar/Adminside.jsx'
import { Outlet } from 'react-router-dom'

const Admindashboard = () => {
    return (
        <>
            <div className='flex min-h-screen bg-gray-100'>
                <div className='w-64 bg-white shadow-lg'>
                    <Adminside />
                </div>
                <div className="flex-1 p-6">
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    <div className="grid grid-cols-3  gap-6 mb-6">
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-xl font-semibold">Total Patients</h2>
                            <p className="text-2xl mt-2">120</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-xl font-semibold">Appointments Today</h2>
                            <p className="text-2xl mt-2">15</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-xl font-semibold">Pending Reports</h2>
                            <p className="text-2xl mt-2">5</p>
                        </div>
                    </div>

                    {/* Table Example */}
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="border-b p-2">Patient</th>
                                    <th className="border-b p-2">Date</th>
                                    <th className="border-b p-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2">John Doe</td>
                                    <td className="p-2">2025-08-08</td>
                                    <td className="p-2 text-green-600">Completed</td>

                                </tr>
                                <tr>
                                    <td className="p-2">Jane Smith</td>
                                    <td className="p-2">2025-08-08</td>
                                    <td className="p-2 text-yellow-600">Pending</td>
                                </tr>
                            </tbody>
                        </table>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admindashboard
