import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Adminside from '../Sidebar/Adminside.jsx'

const Getdoctor = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const doctorRes = await axios.get('http://localhost:3000/api/admin/doctor')
                console.log(doctorRes.data)
                setDoctor(doctorRes.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchDoctor();
    }, [])
    return (
        <div>

            <div className='flex min-h-screen bg-gray-100'>
                <div className='w-64 bg-white shadow-lg'>
                    <Adminside />
                </div>
                <h3 className="text-xl font-semibold  mb-2">Doctors</h3>
                <div className='space-y-2'>
                    {doctor.map((doc) => {
                        return (
                            <div key={doc._id} className="border p-2 rounded shadow">
                                <p><strong>Name:</strong>Dr.{doc.name}</p>
                                <p><strong>Specialty:</strong>{doc.department}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Getdoctor
