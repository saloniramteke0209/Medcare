import React from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaCalendarCheck, FaUserInjured } from 'react-icons/fa6';
import { FaCog, FaSearch, FaSignOutAlt, FaTachometerAlt } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';


const Doctorside = () => {
    const menuItems = [
        { id: "dashboard", icon: <FaTachometerAlt size={20} />, path: "/doctordashboard" },
        { id: "patientappointments", icon: <FaCalendarCheck size={20} />, path: "/patientappointment" },
        { id: "review", icon: <GoPerson size={20} />, path: "/docontact" },
        { id: "logout", icon: <FaSignOutAlt size={20} />, path: "/" },
    ];
    return (

        <div className="w-16 bg-white h-screen flex flex-col items-center py-6 shadow-lg">
            {/* Logo / Short Name */}
            <div className="mb-6 text-xl font-bold">Medcare</div>

            {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`flex items-center justify-center w-10 h-10 my-2 rounded-full transition-all duration-300
                         ${isActive ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200"}`}
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>

    )
}

export default Doctorside
