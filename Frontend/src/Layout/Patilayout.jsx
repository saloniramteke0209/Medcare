import React from 'react';
import { Outlet } from 'react-router-dom';
import Patihome from '../Home/Patihome.jsx';
// import Navbar from './Header/Navbar';




const Patilayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">

            <main className="flex-grow ">
                <Outlet />
            </main>
            <Patihome />
        </div>
    );
};

export default Patilayout;