import express from 'express'
import { getContact, Registercontact } from '../controller/Contactcontroller.js'

const Contactrouter = express.Router()

Contactrouter.post('/', Registercontact)
Contactrouter.get('/allcontact', getContact)

export default Contactrouter