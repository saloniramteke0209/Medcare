import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Connect from './config/db.js';
import Authrouter from './router/Authrouter.js';
import Adminrouter from './router/Adminrouter.js';
import Doctorrouter from './router/Docrouter.js';
import Patientrouter from './router/Patientrouter.js';
import Approuter from './router/Approuter.js';
import Reviewrouter from './router/Reviewrouter.js';




dotenv.config()
Connect()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', Authrouter)
app.use('/api/admin', Adminrouter)
app.use('/api/doctor', Doctorrouter)
app.use('/api/patient', Patientrouter)
app.use('/api/appointment', Approuter)
app.use('/api/contact', Reviewrouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})