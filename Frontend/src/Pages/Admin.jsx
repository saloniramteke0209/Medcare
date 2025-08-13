import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Adminside from '../Sidebar/Adminside.jsx';
import Admhome from '../Home/Admhome.jsx';


const Admin = () => {
    return (

        <Routes>
            <Route path="/" element={<Admhome />} />
        </Routes>

    );
};

export default Admin;
