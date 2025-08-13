import React from "react";
import { Link } from "react-router-dom";


const Admhome = () => {
    return (

        <div className="bg-[#022C28] h-screen w-screen text-white flex items-center pl-20">
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">Welcome, Admin</h1>
                <p className="text-lg text-white max-w-md">
                    Oversee hospital operations, manage doctors and patients, and monitor appointments.
                </p>
                <div className="flex space-x-6 p-6">
                    <a href="/admindashboard"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition">
                        Dashboard
                    </a>
                    <a href="/admincontact"
                        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Admhome;