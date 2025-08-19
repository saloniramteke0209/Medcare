import React from 'react'
import { FaCog, FaSearch, FaSignOutAlt, FaTachometerAlt, FaUserMd } from 'react-icons/fa'
import { FaBell, FaCalendarCheck, FaUserInjured } from 'react-icons/fa6'
import { GoPerson } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Adminside = () => {
    const menuItems = [
        { id: "dashboard", icon: <FaTachometerAlt size={20} />, path: "/admindashboard" },
        { id: "appointments", icon: <FaCalendarCheck size={20} />, path: "/getappointment" },
        { id: "doctors", icon: <FaUserMd size={20} />, path: "/getdoctor" },
        { id: "patients", icon: <FaUserInjured size={20} />, path: "/appointment" },
        { id: "review", icon: <GoPerson size={20} />, path: "/admincontact" },
        { id: "logout", icon: <FaSignOutAlt size={20} />, path: "/" },
    ];
    return (
        <>
            <div className="w-20 bg-white h-screen flex flex-col items-center py-6 shadow-lg">
                {/* Logo / Short Name */}
                <div className="mb-10 text-xl font-bold">Medcare</div>

                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`flex items-center justify-center w-12 h-12 my-3 rounded-full transition-all duration-300
                                   ${isActive ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                        >
                            {item.icon}
                        </Link>
                    );
                })}
            </div>
        </>

    )
}

export default Adminside
