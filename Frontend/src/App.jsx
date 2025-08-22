import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Comp/Login.jsx'
import Appointment from './Comp/Appointment.jsx'
import Admhome from './Home/Admhome.jsx'
import Dochome from './Home/Dochome.jsx'
import Patihome from './Home/Patihome.jsx'
import About from './Comp/About.jsx'
// import Contact from './Comp/Contact.jsx'
import Docontact from './Contact/Docontact.jsx'
import PatientContact from './Contact/Patientcontact.jsx'
import Admincontact from './Contact/Admincontact.jsx'
import Getappointment from './List/Getappointment.jsx'
import PrivateRoute from './Pages/ProtectedRoute.jsx'
import Admindashboard from './Dashboard/Admindashboard.jsx'
// import Admlayout from './Layout/Admlayout.jsx'
// import Adminside from './Sidebar/Adminside.jsx'
// import Doctorside from './Sidebar/Doctorside.jsx'
import Doctordashboard from './Dashboard/Doctordashboard.jsx'
import Patientappointment from './List/Patientappointment.jsx'
import Doctorpatient from './List/Doctorpatient.jsx'
import Patientdashboard from './Dashboard/Patientdashboard.jsx'
// import Doclayout from './Layout/Doclayout.jsx'
// import Patilayout from './Layout/Patilayout.jsx'
import Admin from './Pages/Admin.jsx'
import Doctor from './Pages/Doctor.jsx'
import Patient from './Pages/Patient.jsx'
import Statusappointment from './List/Statusappointment.jsx'
import ViewDoctor from './Comp/Viewdoctor.jsx'
import NotificationPage from './Comp/NotificationPage.jsx'
import AddHistory from './History/Addhistory.jsx'
import PatientHistory from './History/PatientHistory.jsx'
// import Patientside from './Sidebar/Patientside.jsx'



function App() {

  return (

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='about' element={<About />} />
      <Route path='/admin/*' element={
        <PrivateRoute role="admin">
          <Admin />
        </PrivateRoute>} />
      <Route path='/admhome' element={<Admhome />} />
      <Route path='/admindashboard' element={<Admindashboard />} />
      <Route path='/getappointment' element={<Getappointment />} />
      <Route path='/notificationpage' element={<NotificationPage />} />
      <Route path='/admincontact' element={<Admincontact />} />

      <Route path='/doctor/*' element={
        <PrivateRoute role="doctor">
          <Doctor />
        </PrivateRoute>} />
      <Route path='/dochome' element={<Dochome />} />
      <Route path='/doctordashboard' element={<Doctordashboard />} />
      <Route path='/patientappointment' element={<Patientappointment />} />
      <Route path='/addhistory' element={<AddHistory />} />
      <Route path='/docontact' element={<Docontact />} />

      <Route path='/patient/*' element={
        <PrivateRoute role="patient">
          <Patient />
        </PrivateRoute>} />
      <Route path='/patihome' element={<Patihome />} />
      <Route path='/patientdashboard' element={<Patientdashboard />} />
      <Route path='/doctorpatient' element={<Doctorpatient />} />
      <Route path='/statusappointment' element={<Statusappointment />} />
      <Route path='/viewdoctor' element={<ViewDoctor />} />
      <Route path='/patienthistory' element={<PatientHistory />} />
      <Route path='/patientcontact' element={<PatientContact />} />
      <Route path='/appointment' element={<Appointment />} />
    </Routes>

  )
}

export default App;













