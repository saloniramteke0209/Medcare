import express from 'express'
import { getReview, Registercontact } from '../controller/Reviewcontroller.js'

const Reviewrouter = express.Router()

Reviewrouter.post('/', Registercontact)
Reviewrouter.get('/getAllReview', getReview)
console.log("Review routes loaded");

export default Reviewrouter