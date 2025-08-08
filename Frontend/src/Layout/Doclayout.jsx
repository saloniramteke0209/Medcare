import React from 'react';
import { Outlet } from 'react-router-dom';
import Dochome from '../Home/Dochome.jsx';
// import Navbar from './Header/Navbar';



const Doclayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            {/* <Docnavbar /> */}
            <main className="flex-grow ">
                <Outlet />
            </main>
            < Dochome />
        </div>
    );
};

export default Doclayout;