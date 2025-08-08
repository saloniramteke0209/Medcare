import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admlayout from '../Layout/Admlayout.jsx';

const Admin = () => {
    return (
        <Routes>
            <Route path="/" element={<Admlayout />} />
        </Routes>
    );
};

export default Admin;
