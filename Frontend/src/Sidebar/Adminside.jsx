import React from 'react'
import { Link } from 'react-router-dom'

const Adminside = () => {
    return (
        <div>
            <div className="w-64 bg-blue-900 text-white min-h-screen p-4">
                <h1 className="text-2xl font-bold mb-6">Hospital Admin</h1>
                <nav className="space-y-4">
                    <Link to="/admindashboard" className="block hover:bg-blue-700 p-2 rounded">Dashboard</Link>
                    <Link to="/getdoctor" className="block hover:bg-blue-700 p-2 rounded">Doctors</Link>
                    <Link to="/getappointment" className="block hover:bg-blue-700 p-2 rounded">Patients</Link>
                    <Link to="/appointment" className="block hover:bg-blue-700 p-2 rounded">Appointments</Link>
                    <button className="mt-6 bg-red-600 hover:bg-red-700 w-full py-2 rounded">Logout</button>
                </nav>
            </div>
        </div>
    )
}

export default Adminside
