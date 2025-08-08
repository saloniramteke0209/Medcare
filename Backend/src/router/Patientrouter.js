import express from 'express'
import { getDoctor, Registerpatient } from '../controller/Patientcontroller.js';


const Patientrouter = express.Router()

Patientrouter.post('/', Registerpatient);
Patientrouter.get('/doctor', getDoctor);
// Patientrouter.get('/appoit', Allapp);

export default Patientrouter;