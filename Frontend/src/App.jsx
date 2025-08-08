import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Comp/Login.jsx'
// import PrivateRoute from './Header/ProtectedRoute.jsx'
import Appointment from './Comp/Appointment.jsx'
import Admhome from './Home/Admhome.jsx'
import Dochome from './Home/Dochome.jsx'
import Patihome from './Home/Patihome.jsx'
import About from './Comp/About.jsx'
import Contact from './Comp/Contact.jsx'
import Docontact from './Contact/Docontact.jsx'
import PatientContact from './Contact/Patientcontact.jsx'
import Admincontact from './Contact/Admincontact.jsx'
import Getdoctor from './List/Getdoctor.jsx'
import Getappointment from './List/Getappointment.jsx'
import Admin from './Pages/Admin.jsx'
import Doctor from './Pages/Doctor.jsx'
import Patient from './Pages/Patient.jsx'
import PrivateRoute from './Pages/ProtectedRoute.jsx'
import Admindashboard from './Dashboard/Admindashboard.jsx'
import Adminside from './Sidebar/Adminside.jsx'
//import MainLayout from './Layout.jsx'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path='/admhome/*' element={<Admhome />} />
        <Route path='/dochome/*' element={<Dochome />} />
        <Route path='/patihome/*' element={<Patihome />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/getdoctor' element={<Getdoctor />} />
        <Route path='/getappointment' element={<Getappointment />} />
        <Route path='/docontact' element={<Docontact />} />
        <Route path='/patientcontact' element={<PatientContact />} />
        <Route path='/admincontact' element={<Admincontact />} />
        <Route path='/admindashboard' element={<Admindashboard />} />
        <Route path='/adminside' element={<Adminside />} />
        <Route path='/admin/*' element={
          <PrivateRoute role="admin">
            <Admin />
          </PrivateRoute>} />
        <Route path='/doctor/*' element={
          <PrivateRoute role="doctor">
            <Doctor />
          </PrivateRoute>} />
        <Route path='/patient/*' element={
          <PrivateRoute role="patient">
            <Patient />
          </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;













