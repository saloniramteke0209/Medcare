import express from 'express'
import { getReview, Registercontact } from '../controller/Reviewcontroller.js'

const Reviewrouter = express.Router()

Reviewrouter.post('/', Registercontact)
Reviewrouter.get('/allcontact', getReview)

export default Reviewrouter