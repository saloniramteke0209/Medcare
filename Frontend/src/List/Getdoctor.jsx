import axios from "axios";
import React, { useEffect, useState } from "react";
import Adminside from "../Sidebar/Adminside.jsx";
import { FaUserDoctor } from "react-icons/fa6";

const Getdoctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const doctorRes = await axios.get(" https://med-1-9k1u.onrender.com/api/admin/doctor");
                setDoctors(doctorRes.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDoctor();
    }, []);

    return (
        <div className="flex">

            <Adminside />


            {/* Main Content */}
            <main className="flex-1 p-8 ml-16">
                <h1 className="text-3xl font-bold mb-8 text-teal-800">Our Doctors</h1>

                {doctors.length === 0 ? (
                    <p className="text-gray-500">No doctors available at the moment.</p>
                ) : (
                    //display doctors accodring to screen
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {doctors.map((doc) => (
                            //card design
                            <div
                                key={doc._id}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-teal-500/30 transition-all border-t-4 border-teal-500"
                            >
                                {/* Doctor Image */}
                                <div className="flex justify-center mb-4">
                                    <FaUserDoctor
                                        className="w-15 h-15 rounded-full object-cover border-4 border-teal-600"
                                    />
                                </div>

                                {/* Doctor Details */}
                                <h2 className="text-xl font-semibold text-teal-800 text-center">
                                    Dr. {doc.name}
                                </h2>
                                <p className="text-center text-gray-600">{doc.department}</p>

                                {/* Extra Info
                                <div className="mt-4 flex justify-center">
                                    <span className="px-3 py-1 text-sm bg-teal-700 text-teal-300 rounded-full border border-teal-700">
                                        Specialty: {doc.department}
                                    </span>
                                </div> */}
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Getdoctor;
