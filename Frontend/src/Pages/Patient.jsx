import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Patilayout from '../Layout/Patilayout.jsx';

const Patient = () => {
    return (
        <Routes>
            <Route path="/" element={<Patilayout />} />
        </Routes>
    );
};

export default Patient;
