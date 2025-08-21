import React from "react";
import { FaUserMd, FaUserInjured, FaUserShield } from "react-icons/fa";

function Card() {
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    const displayname = role === "doctor" ? `Dr. ${name}` : name;

    // Dynamic Greeting
    const hours = new Date().getHours();
    let greeting = "Hello";
    if (hours < 12) greeting = "Good Morning";
    else if (hours < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    // Role Icons
    const roleIcon =
        role === "doctor" ? (
            <FaUserMd size={24} className="text-teal-600" />
        ) : role === "patient" ? (
            <FaUserInjured size={24} className="text-blue-500" />
        ) : (
            <FaUserShield size={24} className="text-purple-600" />
        );

    return (
        <div
            className="w-[300px] max-w-md mx-auto shadow-lg rounded-2xl bg-gradient-to-r from-teal-100 to-teal-50 hover:scale-105 transition-transform duration-300"
            aria-label={`Greeting card for ${displayname}`}
        >
            <div className="p-6 text-center">
                <div className="flex justify-center mb-3">{roleIcon}</div>
                <h1 className="text-gray-700 text-lg font-semibold">
                    {greeting}, {displayname}
                </h1>
                <p className="mt-2 text-sm opacity-80">
                    Welcome to your <span className="font-medium">{role}</span> dashboard
                </p>
            </div>
        </div>
    );
}

export default Card;
