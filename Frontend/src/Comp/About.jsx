import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import { FaBone, FaHandsHoldingChild } from "react-icons/fa6";

const specialties = [
    {
        icon: <FiHeart className="w-8 h-8 text-blue-600" />,
        title: "Cardiology",
        description: "Diagnosis, treatment, and prevention of heart diseases to improve your heart health.",
    },
    {
        icon: <LuBrain className="w-8 h-8 text-blue-600" />,
        title: "Neurology",
        description: "Comprehensive care for brain, spinal cord, and nerve disorders.",
    },
    {
        icon: <FaBone className="w-8 h-8 text-blue-600" />,
        title: "Orthopedics",
        description: "Treatment for bones, joints, and muscles to restore mobility and comfort.",
    },
    {
        icon: <FaHandsHoldingChild className="w-8 h-8 text-blue-600" />,
        title: "Pediatrics",
        description: "Specialized healthcare for infants, children, and adolescents.",
    },
];

const About = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800">Our Specialties</h2>
                <p className="text-gray-600 mt-2">Expert care across multiple medical fields</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {specialties.map(({ icon, title, description }, i) => {
                    const isActive = activeIndex === i;
                    return (
                        <div key={i} onClick={() => setActiveIndex(i)} className={`rounded-xl shadow-lg p-6 text-center cursor-pointer transition-colors duration-300 
                    ${isActive
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-800 hover:bg-blue-400 hover:text-gray-200"}`}>
                            <div className="flex justify-center mb-2">{icon}</div>
                            <h3 className="text-xl font-bold mb-2">{title}</h3>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    );
                })};
            </div>
        </div>
    );
};

export default About;
