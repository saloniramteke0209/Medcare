import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Patihome from '../Home/Patihome.jsx';


const Patient = () => {
    return (
        <Routes>
            <Route path="/" element={<Patihome />} />
        </Routes>
    );
};

export default Patient;
