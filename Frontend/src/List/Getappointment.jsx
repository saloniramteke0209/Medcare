import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Getappointment = () => {
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
        <div className='p-8'>
            {/* <h2 className="text-3xl font-bold mb-4">All Appointments</h2> */}
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
            {/* <tbody>
                    {appointment.map((app, i) => (
                        <tr key={i} className="text-center border-t">
                            <td className="p-2">{app.Name}</td>
                            <td className="p-2">{app.Number}</td>
                            <td className="p-2">{app.Record}</td>
                            <td className="p-2">{app.Reason}</td>
                            <td className="p-2">{app.Department}</td>
                            <td className="p-2">{app.Date}</td>
                            <td className="p-2">{app.Time}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    )
}

export default Getappointment
