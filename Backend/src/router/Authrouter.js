import express from 'express'
import Log from '../controller/Authcontroller.js';



const Authrouter = express.Router();
// return token and user info 
Authrouter.post('/login', Log);

export default Authrouter;