import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //to handle input fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate() //redirect based on role 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting:", { name, email, role });
            // sends login request to backend
            const res = await axios.post(' https://med-1-9k1u.onrender.com/api/login', {
                name,
                email,
                role
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // alert("Login Successfully")
            if (res.data.token) {
                // saves JWT token
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("name", res.data.name);

                if (res.data.role === "admin") {
                    navigate("/admin");
                    alert("Login Successfully")
                }
                if (res.data.role === "doctor") {
                    navigate("/doctor");
                    alert("Login Successfully")
                }
                if (res.data.role === "patient") {
                    navigate("/patient");
                    alert("Login Successfully")
                }
                else {
                    alert("No token return")
                }
                console.log("Sending login:", { name, email, role });
            }
        }

        catch (error) {
            console.error("Login error:", error.response ? error.response.data : error.message);
            alert("Login Failed");

        }
    }
    //   console.log({ name, Id, role });
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg ">
                <h2 className="text-2xl font-bold mb-4 text-center">MedCare Login</h2>
                <form onSubmit={handleSubmit} className='bg-white p-6  rounded shadow-md w-80'>
                    <label className="block text-gray-700 font-medium">
                        Name:
                        <input type="name" className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-non focus:ring-teal-400" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <label className="block text-gray-700 font-medium">
                        Email:
                        <input type="email" className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-non focus:ring-teal-400" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label className="block text-gray-700 font-medium">Role</label>
                    <select className="w-full p-2 mt-1 border border-gray-300  rounded bg-white focus:outline-none focus:ring-teal-400" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                    </select>
                    <button className="w-full bg-teal-400 text-white font-semibold py-2 rounded hover:bg-teal-500 transition duration-300">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
