import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [mode, setMode] = useState("login");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState("");

    const navigate = useNavigate();

    const roleRoutes = {
        admin: '/admin',
        doctor: '/doctor',
        patient: '/patient',
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setLoading(true);

        try {
            const res = await axios.post(
                'http://localhost:3000/api/login',
                {
                    name: name.trim(),
                    email: email.trim(),
                    password: password.trim(),
                    role,
                },
                { headers: { 'Content-Type': 'application/json' } }
            );

            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('role', res.data.role);
                localStorage.setItem('name', res.data.name);

                navigate(roleRoutes[res.data.role] || '/');
            } else {
                setErrorMsg('Login failed: No token returned.');
            }
        } catch (error) {
            setErrorMsg(error.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:3000/api/forgot-password", { email })
            setSuccessMsg(res.data.message || "Password reset token sent to email")
        }
        catch (error) {
            setErrorMsg(error.response?.data?.message || "Error sending reset link")
        }
        finally {
            setLoading(false);
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:3000/api/reset-password", {
                token,
                newPassword,
            });
            setSuccessMsg(res.data.message || "Password is reset")
            setMode("login")
        }
        catch (error) {
            setErrorMsg(error.response?.data?.message || "Error is reset the password")
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    {mode === "login"
                        ? "MedCare Login"
                        : mode === "forgot"
                            ? "Forgot Password"
                            : "Reset Password"}
                    MedCare Login</h2>
                {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
                {successMsg && <p className="text-red-500 text-sm mb-4">{successMsg}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block text-gray-700 font-medium">
                        Name:
                        <input
                            type="text"
                            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className="block text-gray-700 font-medium">
                        Email:
                        <input
                            type="email"
                            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label className="block text-gray-700 font-medium">
                        Password:
                        <input
                            type="password"
                            autoComplete='current-password'
                            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <label className="block text-gray-700 font-medium">Role:</label>
                    <select
                        className="w-full p-2 mt-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                    </select>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-teal-400 text-white font-semibold py-2 rounded hover:bg-teal-500 transition duration-300 disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    <p
                        className="text-sm text-blue-500 cursor-pointer mt-2 text-center"
                        onClick={() => setMode("forgot")}
                    >
                        Forgot password?
                    </p>
                </form>
                {mode === "forgot" && (
                    <form onSubmit={handleForgotPassword} className="space-y-4">
                        <label className="block text-gray-700 font-medium">
                            Enter your email:
                            <input
                                type="email"
                                className="w-full p-2 mt-1 border border-gray-300 rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-teal-400 text-white py-2 rounded hover:bg-teal-500 disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Reset Link"}
                        </button>
                        <p
                            className="text-sm text-blue-500 cursor-pointer mt-2 text-center"
                            onClick={() => setMode("reset")}
                        >
                            Already have a token? Reset password
                        </p>
                        <p
                            className="text-sm text-gray-500 cursor-pointer mt-2 text-center"
                            onClick={() => setMode("login")}
                        >
                            Back to login
                        </p>
                    </form>
                )}


                {mode === "reset" && (
                    <form onSubmit={handleResetPassword} className="space-y-4">
                        <label className="block text-gray-700 font-medium">
                            Reset Token:
                            <input
                                type="text"
                                className="w-full p-2 mt-1 border border-gray-300 rounded"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                required
                            />
                        </label>
                        <label className="block text-gray-700 font-medium">
                            New Password:
                            <input
                                type="password"
                                className="w-full p-2 mt-1 border border-gray-300 rounded"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-teal-400 text-white py-2 rounded hover:bg-teal-500 disabled:opacity-50"
                        >
                            {loading ? "Resetting..." : "Reset Password"}
                        </button>
                        <p
                            className="text-sm text-gray-500 cursor-pointer mt-2 text-center"
                            onClick={() => setMode("login")}
                        >
                            Back to login
                        </p>
                    </form>
                )}
                {mode === "reset" && (
                    <form onSubmit={handleResetPassword} className="space-y-4">
                        <label className="block text-gray-700 font-medium">
                            Reset Token:
                            <input
                                type="text"
                                className="w-full p-2 mt-1 border border-gray-300 rounded"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                required
                            />
                        </label>
                        <label className="block text-gray-700 font-medium">
                            New Password:
                            <input
                                type="password"
                                className="w-full p-2 mt-1 border border-gray-300 rounded"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-teal-400 text-white py-2 rounded hover:bg-teal-500 disabled:opacity-50"
                        >
                            {loading ? "Resetting..." : "Reset Password"}
                        </button>
                        <p
                            className="text-sm text-gray-500 cursor-pointer mt-2 text-center"
                            onClick={() => setMode("login")}
                        >
                            Back to login
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
