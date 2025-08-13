import React from 'react';
import { Outlet } from 'react-router-dom';
// import Adminside from '../Sidebar/Adminside.jsx';
import Admhome from '../Home/Admhome.jsx';


const Admlayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
            <Admhome />
            <main className="flex-grow max-w-7xl mx-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Admlayout;