import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";

const Admnavbar = () => {
    return (
        <>
            <div className="bg-gray-800 text-white text-sm py-2 px-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <FiPhone />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FiMail />
                        <span>info@yourhospital.com</span>
                    </div>
                </div>
                <div className="space-x-4">
                    <Link to="/" className="hover:underline">Login out</Link>
                </div>
            </div>

            <nav className="bg-white shadow-md px-4 py-3">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-700">MedCare</Link>
                    <div className="space-x-6 text-gray-700 font-medium">
                        <Link to="/admhome">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/getappointment">Patient</Link>
                        <Link to="/getdoctor">Doctor</Link>
                        <Link to="/payment">Payment</Link>
                        <Link to="/admincontact">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Admnavbar;