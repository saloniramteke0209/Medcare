
import axios from "axios";
import React from "react";
import { useState } from "react";
import Doctorside from "../Sidebar/Doctorside.jsx";


const Docontact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            console.log("Posting to:", "https://medcare-cwzf.onrender.com/api/review/create");
            axios.post("https://medcare-cwzf.onrender.com/api/review/create"
                , {
                    name,
                    email,
                    review,
                    role: "doctor"

                }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert("Submitting")
        }
        catch (error) {
            console.log(error)
            alert("Error in submitting")
        }
    }
    return (
        <div className='flex min-h-screen '>

            <Doctorside />

            <div className="min-h-screen bg-gray-50 px-4 py-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Contact Us</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded shadow">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Contact Us</h3>
                            <p className="text-gray-700 mb-8">
                                Have a question or want to report an reviwe? Reach out to us.
                            </p>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block font-medium">Your Name</label>
                                    <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label className="block font-medium">Your Email</label>
                                    <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label className="block font-medium">Message</label>
                                    <textarea rows="4" placeholder="Write your message..." className="w-full p-2 border rounded" value={review} onChange={(e) => setReview(e.target.value)} />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                                >
                                    Submit
                                </button>

                            </form>
                        </div>

                        <div className="flex justify-center items-center">
                            <img
                                src="https://img.freepik.com/premium-vector/portrait-doctor-showing-results-patient-test-illustration_158784-578.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Doctor consulting patient"
                                className="w-full h-[80v] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Docontact;