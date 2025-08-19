import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Adminside from '../Sidebar/Adminside.jsx'
import { GoPerson } from 'react-icons/go'

const Admincontact = () => {
    const [contact, setContact] = useState([]);
    const [filter, setFilter] = useState("");
    useEffect(() => {
        const fetchContact = async () => {
            try {
                const contactRes = await axios.get("https://med-1-9k1u.onrender.com/api/review/getAllReview", { params: filter ? { role: filter } : {} })
                // console.log("Final request URL:", contactRes.config.url);
                // console.log("Params sent:", contactRes.config.params);
                // console.log("Data received:", contactRes.data);

                setContact(contactRes.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchContact();
    }, [filter])
    return (

        <div className='flex min-h-screen '>

            <Adminside />

            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">All Reviews & Issues</h3>
                <div className="flex gap-4 mb-6">
                    <button
                        onClick={() => setFilter("")}
                        className={`px-4 py-2 rounded ${filter === "" ? "bg-teal-500 text-white" : "bg-gray-200"}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("doctor")}
                        className={`px-4 py-2 rounded ${filter === "doctor" ? "bg-teal-500 text-white" : "bg-gray-200"}`}
                    >
                        Doctors
                    </button>
                    <button
                        onClick={() => setFilter("patient")}
                        className={`px-4 py-2 rounded ${filter === "patient" ? "bg-teal-500 text-white" : "bg-gray-200"}`}
                    >
                        Patients
                    </button>
                </div>

                {contact.length === 0 ? (
                    <p className="text-gray-500">No reviews or issues found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contact.map((con) => (
                            <div
                                key={con._id}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-teal-500"
                            >
                                {/* Avatar */}
                                <div className="flex justify-center mb-4">
                                    <GoPerson
                                        className="w-20 h-20 rounded-full object-cover border-4 border-teal-100"
                                    />
                                </div>

                                {/* Details */}
                                <h2 className="text-xl font-semibold text-gray-800 text-center">
                                    {con.name}
                                </h2>
                                <p className="text-center text-gray-600">{con.email}</p>

                                {/* <h2 className="text-xl font-semibold text-gray-800 text-center">
                                    {con.name}
                                </h2>
                                <p className="text-center text-gray-600">{con.}</p> */}

                                {/* Message */}
                                <div className="mt-4 bg-teal-50 p-3 rounded-lg text-center">
                                    <p className="text-gray-700 ">"{con.review}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>




    )
}

export default Admincontact
