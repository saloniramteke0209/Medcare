import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import { GoPerson } from "react-icons/go";

const Doctorside = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt size={20} />, path: "/doctordashboard" },
        { id: "appointments", label: "Appointments", icon: <FaCalendarCheck size={20} />, path: "/patientappointment" },
        { id: "addhistory", label: "addhistory", icon: <FaCalendarCheck size={20} />, path: "/addhistory" },
        { id: "review", label: "Reviews", icon: <GoPerson size={20} />, path: "/docontact" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token"); // clear auth token
        navigate("/"); // redirect to login
    };

    return (
        <div className="w-16 bg-white h-screen flex flex-col items-center py-6 shadow-lg">
            {/* Logo */}
            <div className="mb-8 text-lg font-extrabold text-teal-600">MEDTRACK</div>

            {/* Menu Items */}
            {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link
                        key={item.id}
                        to={item.path}
                        aria-label={item.label}
                        className={`group relative flex items-center justify-center w-10 h-10 my-3 rounded-full transition-all duration-300
              ${isActive ? "bg-teal-500 text-white shadow-md scale-110" : "text-gray-600 hover:bg-gray-200 hover:scale-105"}`}
                    >
                        {item.icon}
                        {/* Tooltip */}
                        <span className="absolute left-14 hidden group-hover:flex bg-teal-600 text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                            {item.label}
                        </span>
                    </Link>
                );
            })}

            {/* Logout */}
            <button
                onClick={handleLogout}
                aria-label="Logout"
                className="mt-auto flex items-center justify-center w-10 h-10 my-3 rounded-full text-red-500 hover:bg-red-100 transition-all duration-300"
            >
                <FaSignOutAlt size={20} />
            </button>
        </div>
    );
};

export default Doctorside;
