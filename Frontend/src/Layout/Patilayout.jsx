import React from 'react';
import { Outlet } from 'react-router-dom';

import Patihome from '../Home/Patihome';


const Patilayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <Patihome />
            <main className="flex-grow ">
                <Outlet />
            </main>

        </div>
    );
};

export default Patilayout;