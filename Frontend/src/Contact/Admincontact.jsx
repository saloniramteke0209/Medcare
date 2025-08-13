import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Adminside from '../Sidebar/Adminside.jsx'

const Admincontact = () => {
    const [contact, setContact] = useState([]);
    useEffect(() => {
        const fetchContact = async () => {
            try {
                const contactRes = await axios.get('http://localhost:3000/api/contact/allcontact')
                console.log(contactRes.data)
                setContact(contactRes.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchContact();
    }, [])
    return (

        <div className='flex min-h-screen bg-gray-100'>
            <div className='w-64 bg-white shadow-lg'>
                <Adminside />
            </div>
            <div className='mb-8'>
                <h3 className='text-xl font-semibold mb-2'>All review and issues</h3>
                <div className='space-y-2'>
                    {contact.map((con) => {
                        return (
                            <div key={con._id} className='border p-2 rounded shadow'>
                                <p><strong>Patient:</strong>{con.name}</p>
                                <p><strong>Email:</strong>{con.email}</p>
                                <p><strong>Message:</strong>{con.issues}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>



    )
}

export default Admincontact
