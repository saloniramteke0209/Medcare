import React from "react";
import { Route, Routes } from "react-router-dom";
import Docnavbar from "../Navbar/Docnavabar.jsx";

const Dochome = () => {
    return (
        <>
            <Routes>
                <Route path='*' element={<Docnavbar />} />
            </Routes>
            <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center px-6 md:px-16 py-10">
                {/* Main Hero Section */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full max-w-7xl">

                    {/* Left Text Section */}
                    <div className="flex-1 text-center lg:text-left space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                            Your Health is Our <span className="text-blue-600">Top Priority</span>
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl">
                            Welcome to MedCare Hospital — providing compassionate care and expert services
                            to keep you and your family healthy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            {/* <Link to="/appointment">
                                <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                                    Book Appointment
                                </button>
                            </Link> */}
                            {/* <Link to="/patientapplist">
                                <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition">
                                    View Patient Appointment
                                </button>
                            </Link> */}
                        </div>
                    </div>

                    {/* Right Image Section with Gradient */}
                    <div className="flex-1 flex justify-center relative w-full">
                        {/* Gradient Background */}
                        <div className="absolute top-4 left-4 right-4 bottom-4 bg-gradient-to-tr from-blue-200 via-white to-blue-100 rounded-xl blur-sm z-0" />
                        {/* Doctor Image */}
                        <img
                            src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg"
                            alt="Professional Doctor"
                            className="relative w-[220px] md:w-[280px] lg:w-[340px] rounded-xl shadow-xl opacity-95 z-10"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dochome;