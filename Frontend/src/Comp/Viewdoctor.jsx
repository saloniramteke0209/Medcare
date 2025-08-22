import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const specialties = [
    { icon: <img src='https://randomuser.me/api/portraits/men/1.jpg' className="w-25 h-25 rounded-full" />, name: "Nitya", gender: "female", department: "Cardiology", description: "Diagnosis, treatment, and prevention of heart diseases to improve your heart health." },
    { icon: <img src='https://randomuser.me/api/portraits/men/2.jpg' className="w-25 h-25 rounded-full" />, name: "Abhishake", gender: "male", department: "Neurology", description: "Comprehensive care for brain, spinal cord, and nerve disorders." },
    { icon: <img src='https://randomuser.me/api/portraits/men/3.jpg' className="w-25 h-25 rounded-full" />, name: "Ankit", gender: "male", department: "Orthopedics", description: "Treatment for bones, joints, and muscles to restore mobility and comfort." },
    { icon: <img src='https://randomuser.me/api/portraits/women/4.jpg' className="w-25 h-25 rounded-full" />, name: "Palak", gender: "female", department: "Pediatrics", description: "Specialized healthcare for infants, children, and adolescents." },
    { icon: <img src='https://randomuser.me/api/portraits/women/5.jpg' className="w-25 h-25 rounded-full" />, name: "Jay", gender: "female", department: "Pediatrics", description: "Specialized healthcare for infants, children, and adolescents." },
    { icon: <img src='https://randomuser.me/api/portraits/men/6.jpg' className="w-25 h-25 rounded-full" />, name: "Divay", gender: "male", department: "Neurology", description: "Comprehensive care for brain, spinal cord, and nerve disorders." },
    { icon: <img src='https://randomuser.me/api/portraits/women/7.jpg' className="w-25 h-25 rounded-full" />, name: "Dev", gender: "female", department: "Cardiology", description: "Diagnosis, treatment, and prevention of heart diseases to improve your heart health." },
    { icon: <img src='https://randomuser.me/api/portraits/men/8.jpg' className="w-25 h-25 rounded-full" />, name: "Rohit", gender: "male", department: "Dermatology", description: "Skin care, diagnosis and treatment of skin conditions." },
    { icon: <img src='https://randomuser.me/api/portraits/women/9.jpg' className="w-25 h-25 rounded-full" />, name: "Simran", gender: "female", department: "Gynecology", description: "Health care for women including pregnancy and reproductive health." },
    { icon: <img src='https://randomuser.me/api/portraits/men/10.jpg' className="w-25 h-25 rounded-full" />, name: "Aman", gender: "male", department: "Orthopedics", description: "Treatment for bones, joints, and muscles to restore mobility and comfort." },
    { icon: <img src='https://randomuser.me/api/portraits/women/11.jpg' className="w-25 h-25 rounded-full" />, name: "Neha", gender: "female", department: "Cardiology", description: "Diagnosis, treatment, and prevention of heart diseases to improve your heart health." },
];

const Viewdoctor = () => {
    const [selectedDept, setSelectedDept] = useState('All');
    const navigate = useNavigate();
    const departments = ['All', ...new Set(specialties.map(s => s.department))];
    const filteredSpecialties = selectedDept === 'All' ? specialties : specialties.filter(s => s.department === selectedDept);

    const handleBookAppointment = (doctorName) => {
        // Navigate to Appointment page and pass doctor name as state
        navigate('/appointment', { state: { doctor: doctorName } });
    };

    return (
        <div className="flex">
            <div className="p-4 flex-1">
                <h1 className="text-2xl font-bold mb-4">Doctors</h1>

                {/* Department Filter */}
                <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="mb-4 p-2 border rounded"
                >
                    {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                    ))}
                </select>

                {/* Display Doctors */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredSpecialties.map((doc, index) => (
                        <div key={index} className="border p-4 rounded shadow flex flex-col items-center">
                            <div className="mb-2">{doc.icon}</div>
                            <h2 className="text-xl font-semibold">{doc.name}</h2>
                            <p className="text-gray-500">{doc.department}</p>
                            <p className="text-center">{doc.description}</p>

                            {/* Book Appointment Button */}
                            <button
                                className="mt-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                onClick={() => handleBookAppointment(doc.name)}
                            >
                                Book Appointment
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Viewdoctor;