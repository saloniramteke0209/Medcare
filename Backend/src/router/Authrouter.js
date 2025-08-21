import express from 'express'
import Log from '../controller/Authcontroller.js';
import { Frogetpassword } from '../controller/Frogetpassword.js';
import { Resetpassword } from '../controller/ResetPassword.js';



const Authrouter = express.Router();
// return token and user info 
Authrouter.post('/login', Log);
Authrouter.post('/forgot-password', Frogetpassword)
Authrouter.post('/reset-password', Resetpassword)


export default Authrouter;