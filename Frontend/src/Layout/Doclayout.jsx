import React from 'react';
import { Outlet } from 'react-router-dom';
import Dochome from '../Home/Dochome.jsx';



const Doclayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <Dochome />
            <main className="flex-grow ">
                <Outlet />
            </main>
        </div>
    );
};

export default Doclayout;