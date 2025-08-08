// src/pages/About.jsx
import React from "react";

const team = [
    { name: "Dr. Meera Shah", role: "Cardiologist" },
    { name: "Dr. Aryan Deshmukh", role: "Neurologist" },
    { name: "Dr. Pooja Sethi", role: "Pediatrician" },
];

const About = () => {
    return (
        <div className="bg-white text-gray-800 p-6">
            <section className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">About MedicoCare</h1>
                <p className="text-gray-700">
                    MedicoCare is a multi-specialty hospital dedicated to delivering exceptional healthcare services.
                    Our mission is to combine cutting-edge technology with compassionate care to improve patient lives.
                </p>
            </section>

            <section className="bg-gray-100 py-12 px-4">
                <h2 className="text-2xl font-semibold text-center text-blue-900 mb-8">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded shadow text-center">
                            <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full mb-4"></div>
                            <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
                            <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;