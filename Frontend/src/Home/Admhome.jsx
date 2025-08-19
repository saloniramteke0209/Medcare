import React, { useState } from "react";
import { Link } from "react-router-dom";

const specialties = [
    {
        icon: <img src='data:image/jpeg;base64,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' className="w-25 h-25 object-cover" />,
        name: "Nitya",
        department: "Cardiology",
        description: "Diagnosis, treatment, and prevention of heart diseases to improve your heart health.",
    },
    {
        icon: < img src='https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor.jpg?v=1684314843' className="w-25 h-25 object-cover" />,
        name: "Abhishake",
        department: "Neurology",
        description: "Comprehensive care for brain, spinal cord, and nerve disorders.",
    },
    {
        icon: <img src='data:image/jpeg;base64,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' className="w-25 h-25 object-cover" />,
        name: "Ankit",
        department: "Orthopedics",
        description: "Treatment for bones, joints, and muscles to restore mobility and comfort.",
    },
    {
        icon: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPzl6iSRl0xHI2MLIKzAzD24qUDxPpBKQTrBzBJeL8O1hRo5feZuUSlnIWLfwtSccE9E&usqp=CAU' className="w-25 h-25 object-cover" />,
        name: "Palak ",
        department: "Pediatrics",
        description: "Specialized healthcare for infants, children, and adolescents.",
    },
];
const Admhome = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (

        <div className=" min-h-screen text-gray-900">
            <section className=" flex flex-row items-center  px-12 py-10">

                <div className="w-1/2 pr-8">
                    <h1 className="text-4xl font-bold  mb-4 text-[#024c3b]">Welcome, Admin</h1>
                    <p className="text-gray-700 mb-6">
                        Review your appoinment, patient history, and manage schedules in one place
                    </p>
                    <div className="flex gap-4">
                        <a href="/admindashboard"
                            className="px-6 py-3 bg-[#2aa882] text-white rounded-lg shadow-lg hover:bg-[#218c6d] transition">
                            Dashboard
                        </a>
                        <a href="/admincontact"
                            className="px-6 py-3 bg-[#2aa882] text-white rounded-lg shadow-lg hover:bg-[#218c6d] transition">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center ">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661671906050-680a540acbbe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Surgery in progress"
                        className="w-full h-[80vh] object-cover rounded-lg shadow-lg"
                    />
                </div>
            </section>
            <section className="px-12 pb-12">
                <h2 className="text-4xl font-bold  mb-4 text-[#024c3b] text-center">
                    Meet Our Health Expert
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {specialties.map(({ icon, name, department, description }, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <div key={i} onClick={() => setActiveIndex(i)} className={`rounded-xl shadow-md overflow-hidden p-6 text-center cursor-pointer transition-colors duration-300 
                                    ${isActive
                                    ? "bg-[#e6fff4] text-[#1e6f5c]"
                                    : "bg-white text-gray-700 hover:bg-[#b9f5dd] hover:text-[#1e6f5c]"}`}>
                                <div className="flex justify-center mb-2 text-[#b5c99a] text-3xl">{icon}</div>
                                <h3 className="text-xl mb-2 text-[#7b9c52]">{name}</h3>
                                <p className="text-gray-500 text-sm">{department}</p>
                                <p className="text-gray-500 mt-2">{description}</p>
                            </div>
                        );
                    })};
                </div>
            </section>

        </div>

    );
};

export default Admhome;