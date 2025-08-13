import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dochome from '../Home/Dochome.jsx';



const Doctor = () => {
    return (
        <Routes>
            <Route path="*" element={< Dochome />} />
        </Routes>
    );
};

export default Doctor;




