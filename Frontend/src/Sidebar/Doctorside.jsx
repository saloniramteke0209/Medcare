import React from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaCalendarCheck, FaUserInjured } from 'react-icons/fa6';
import { FaCog, FaSearch, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';


const Doctorside = () => {

    return (
        <>
            <div className="w-60 bg-white h-screen p-5 shadow-lg">
                <h1 className="text-2xl font-bold mb-8">MedTrack</h1>

                <ul className="space-y-4">
                    <li>
                        <Link to="/doctordashboard" className="flex items-center space-x-2 hover:text-teal-600">
                            <FaTachometerAlt /> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/patientappointment" className="flex items-center space-x-2 hover:text-teal-600">
                            <FaUserInjured /> <span>Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/appointment" className="flex items-center space-x-2 hover:text-teal-600">
                            <FaCalendarCheck /> <span>Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="flex items-center space-x-2 hover:text-teal-600">
                            <FaCog /> <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex items-center space-x-2 hover:text-teal-600">
                            <FaSignOutAlt /> <span>Logout</span>
                        </Link>
                    </li>
                </ul>

                {/* Search box */}
                <div className="mt-6 flex items-center bg-[#FAF3E0] rounded px-2 py-1">
                    <FaSearch className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none px-2 w-full"
                    />
                </div>
            </div>
        </>
    )
}

export default Doctorside
