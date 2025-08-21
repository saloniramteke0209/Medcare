import React from "react";
import { FaSignOutAlt, FaTachometerAlt, FaUserMd } from "react-icons/fa";
import { FaCalendarCheck, FaUserInjured } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Adminside = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt size={20} />, path: "/admindashboard" },
        { id: "appointments", label: "Appointments", icon: <FaCalendarCheck size={20} />, path: "/getappointment" },
        { id: "doctors", label: "Doctors", icon: <FaUserMd size={20} />, path: "/viewdoctor" },
        { id: "patients", label: "Patients", icon: <FaUserInjured size={20} />, path: "/appointment" },
        { id: "review", label: "Reviews", icon: <GoPerson size={20} />, path: "/admincontact" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token"); // clear auth token
        navigate("/"); // redirect to login
    };

    return (
        <div className="w-20 bg-white h-screen flex flex-col items-center py-6 shadow-lg">
            {/* Logo */}
            <div className="mb-10 text-lg font-extrabold text-teal-600">MEDTRACK</div>

            {/* Menu */}
            {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link
                        key={item.id}
                        to={item.path}
                        aria-label={item.label}
                        className={`group relative flex items-center justify-center w-12 h-12 my-3 rounded-full transition-all duration-300
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

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                aria-label="Logout"
                className="mt-auto flex items-center justify-center w-12 h-12 my-3 rounded-full text-red-500 hover:bg-red-100 transition-all duration-300"
            >
                <FaSignOutAlt size={20} />
            </button>
        </div>
    );
};

export default Adminside;
