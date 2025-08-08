import express from 'express'
import { getDoctor, getPatient, Registeradmin } from '../controller/Admincontroller.js'

const Adminrouter = express.Router()

Adminrouter.post('/', Registeradmin);
Adminrouter.get('/doctor', getDoctor);
Adminrouter.get('/patient', getPatient)

export default Adminrouter