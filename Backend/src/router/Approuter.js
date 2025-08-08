import express from 'express'
import { getAppointment, Registerappointment } from '../controller/Appcontroller.js';


const Approuter = express.Router();

Approuter.post('/', Registerappointment);
Approuter.get('/allapponiment', getAppointment)

export default Approuter;