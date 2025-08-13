import React, { useState } from 'react'
import Doctorside from '../Sidebar/Doctorside.jsx'
import { Outlet } from 'react-router-dom'

const Doctordashboard = () => {

    return (
        <>
            <div className='flex min-h-screen bg-gray-100'>
                <div className='w-64 bg-white shadow-lg'>
                    <Doctorside />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Total Doctors</h3>
                        <p className="text-3xl font-bold text-[#008080]">128</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Total Patients</h3>
                        <p className="text-3xl font-bold text-[#008080]">2,430</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Appointments Today</h3>
                        <p className="text-3xl font-bold text-[#FF6F61]">87</p>
                    </div>
                </div>

                <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Monthly Overview</h3>
                    <div className="h-48 bg-[#FAF3E0] flex items-center justify-center text-gray-500">
                        Chart will go here
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctordashboard