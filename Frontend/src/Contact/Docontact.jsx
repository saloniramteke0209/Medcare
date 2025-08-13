
import axios from "axios";
import React from "react";
import { useState } from "react";
import Doctorside from "../Sidebar/Doctorside.jsx";


const Docontact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [issues, setIssues] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/contact', {
                name,
                email,
                issues

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
        <div className='flex min-h-screen bg-gray-100'>
            <div className='w-64 bg-white shadow-lg'>
                <Doctorside />
            </div>
            <div className="min-h-screen bg-gray-50 px-4 py-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Contact Us</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded shadow">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Contact Us</h3>
                            <p className="text-gray-700 mb-8">
                                Have a question or want to report an reviwe? Reach out to us.
                            </p>

                            <form className="space-y-4" onClick={handleSubmit}>
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
                                    <textarea rows="4" placeholder="Write your message..." className="w-full p-2 border rounded" value={issues} onChange={(e) => setIssues(e.target.value)} />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                                >
                                    Submit
                                </button>

                            </form>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-blue-600">Visit Us</h3>
                                <p><strong>Address:</strong> MedCare Hospital, Mumbai, India</p>
                                <p><strong>Email:</strong> contact@medcarehospital.com</p>
                                <p><strong>Phone:</strong> +91-1234567890</p>
                            </div>

                            <div className="w-full h-64">
                                <iframe
                                    title="MedCare Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609843818!2d72.74109954338499!3d19.082197839039854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63fe9f1f0fd%3A0xf2970e5a94a25b1e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1618123456789"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded shadow"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docontact;