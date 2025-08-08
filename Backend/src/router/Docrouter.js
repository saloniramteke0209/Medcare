import express from 'express'
import { getAppointment, getPatient, Registerdoctor } from '../controller/Docontroller.js'

const Doctorrouter = express.Router()

Doctorrouter.post('/', Registerdoctor);
Doctorrouter.get('/patient', getPatient);
Doctorrouter.get('/appointment', getAppointment);


export default Doctorrouter;