import React from 'react';
import { Outlet } from 'react-router-dom';
import Admhome from '../Home/Admhome.jsx';
import Adminside from '../Sidebar/Adminside.jsx';


const Admlayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
            <header className='sticky top-0 z-50 shadow bg-white'>
                <Adminside />
            </header>
            <main className="flex-grow max-w-7xl mx-auto">
                <Outlet />
            </main>
            <Admhome />
        </div>
    );
};

export default Admlayout;