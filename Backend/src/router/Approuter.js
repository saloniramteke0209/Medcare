import express from 'express'
import { getAppointment, Registerappointment, updateStatus } from '../controller/Appcontroller.js';


const Approuter = express.Router();

Approuter.post('/', Registerappointment);
Approuter.get('/allapponiment', getAppointment);
Approuter.put('/:id/status', updateStatus);

export default Approuter;