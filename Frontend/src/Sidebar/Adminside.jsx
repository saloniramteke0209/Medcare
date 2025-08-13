import React from 'react'
import { FaCog, FaSearch, FaSignOutAlt, FaTachometerAlt, FaUserMd } from 'react-icons/fa'
import { FaBell, FaCalendarCheck, FaUserInjured } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Adminside = () => {
    return (
        <>
            <div>
                <h1 className="text-2xl text-[#FAF3E0] font-bold mb-10 tracking-wide">MedTrack</h1>

                <ul className="space-y-3">
                    {/* Dashboard */}
                    <li>
                        <Link
                            to="/admindashboard"
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 
                                    ${location.pathname === "/admindashboard"
                                    ? "bg-[#FF6F61] text-white border-l-4 border-[#FFD700] shadow-md"
                                    : "text-[#FAF3E0] hover:bg-[#FF6F61] hover:text-white"}`}
                        >
                            <FaTachometerAlt /> <span>Dashboard</span>
                        </Link>
                    </li>

                    {/* Doctors */}
                    <li>
                        <Link
                            to="/getdoctor"
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 
                                    ${location.pathname === "/getdoctor"
                                    ? "bg-[#FF6F61] text-white border-l-4 border-[#FFD700] shadow-md"
                                    : "text-[#FAF3E0] hover:bg-[#FF6F61] hover:text-white"}`}
                        >
                            <FaUserMd /> <span>Doctors</span>
                        </Link>
                    </li>

                    {/* Patients */}
                    <li>
                        <Link
                            to="/getappointment"
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 
                                    ${location.pathname === "/getappointment"
                                    ? "bg-[#FF6F61] text-white border-l-4 border-[#FFD700] shadow-md"
                                    : "text-[#FAF3E0] hover:bg-[#FF6F61] hover:text-white"}`}
                        >
                            <FaUserInjured /> <span>Patients</span>
                        </Link>
                    </li>

                    {/* Appointments */}
                    <li>
                        <Link
                            to="/appointment"
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 
                                    ${location.pathname === "/appointment"
                                    ? "bg-[#FF6F61] text-white border-l-4 border-[#FFD700] shadow-md"
                                    : "text-[#FAF3E0] hover:bg-[#FF6F61] hover:text-white"}`}
                        >
                            <FaCalendarCheck /> <span>Appointments</span>
                        </Link>
                    </li>



                    {/* Logout */}
                    <li>
                        <Link
                            to="/"
                            className="flex items-center space-x-3 p-3 rounded-lg text-[#FAF3E0] hover:bg-red-500 hover:text-white transition-all duration-300"
                        >
                            <FaSignOutAlt /> <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </>

    )
}

export default Adminside
