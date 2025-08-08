import React from 'react';
// import MainLayout from '../Layout';
import { Routes, Route } from 'react-router-dom';
import Doclayout from '../Layout/Doclayout.jsx';


const Doctor = () => {
    return (
        <Routes>
            <Route path="/" element={< Doclayout />} />
        </Routes>
    );
};

export default Doctor;




