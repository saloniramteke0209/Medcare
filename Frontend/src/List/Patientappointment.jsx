import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Doctorside from '../Sidebar/Doctorside.jsx'

const Patientappointment = () => {
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        const fetchAppoinment = async () => {
            try {
                const appoinmentRes = await axios.get('http://localhost:3000/api/appointment/allapponiment')
                setAppointment(appoinmentRes.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchAppoinment();
    }, [])
    return (
        <div>
            <div className='flex min-h-screen bg-gray-100'>
                <div className='w-64 bg-white shadow-lg'>
                    <Doctorside />
                </div>
                <div className='mb-8'>
                    <h3 className='text-xl font-semibold mb-2'>All Appoinment</h3>
                    <div className='space-y-2'>
                        {appointment.map((app) => {
                            return (
                                <div key={app._id} className='border p-2 rounded shadow'>
                                    <p><strong>Patient:</strong>{app.Name}</p>
                                    <p><strong>Phone:</strong>{app.Number}</p>
                                    <p><strong>Date:</strong>{app.Date}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patientappointment
