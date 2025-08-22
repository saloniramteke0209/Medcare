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
            <div className="relative flex justify-center items-center">
                <img
                    src="https://plus.unsplash.com/premium_vector-1714618885477-9d7fd815f530?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Doctor"
                    className="w-16 h-16 object-cover rounded-full"
                />
                <FaUserMd
                    size={20}
                    className="absolute bottom-0 right-0 text-teal-600 bg-white rounded-full p-1 shadow-md"
                />
            </div>
        ) : role === "patient" ? (
            <div className="relative flex justify-center items-center">
                <img
                    src="https://plus.unsplash.com/premium_vector-1723550230272-423cdac21d58?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Patient"
                    className="w-16 h-16 object-cover rounded-full"
                />
                <FaUserInjured
                    size={20}
                    className="absolute bottom-0 right-0 text-blue-500 bg-white rounded-full p-1 shadow-md"
                />
            </div>
        ) : role === "admin" ? (
            <div className="relative flex justify-center items-center">
                <img
                    src="https://plus.unsplash.com/premium_vector-1682310631452-ab39534cfc6e?q=80&w=947&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Admin"
                    className="w-16 h-16 object-cover rounded-full"
                />
                <FaUserShield
                    size={20}
                    className="absolute bottom-0 right-0 text-purple-600 bg-white rounded-full p-1 shadow-md"
                />
            </div>
        ) : null;
    return (
        <>
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
        </>
    );
}

export default Card;
