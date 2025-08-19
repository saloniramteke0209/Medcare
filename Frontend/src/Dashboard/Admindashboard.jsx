import React from 'react'
import Adminside from '../Sidebar/Adminside.jsx'

import Chart from '../Admindashboard/Adminchart.jsx'

import Department from '../Admindashboard/Admindepartment.jsx'
import Card from '../Comp/Card.jsx'

const Admindashboard = () => {
    return (
        <>
            <div className='flex'>

                <Adminside />

                <div className="p-6 bg-teal-50 min-h-screen ">
                    <div className='flex gap-6'>

                        <Card />
                        <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                            <div>
                                <h2 className='text-gray-600 text-lg'>Total Surgery</h2>
                            </div>
                            <div className='flex space-x-3'>
                                <img
                                    src='https://plus.unsplash.com/premium_vector-1682270089736-01da39d8d527?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'
                                    className='w-25 h-25  object-cover'
                                />
                            </div>
                        </div>
                        <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                            <div>
                                <h2 className='text-gray-600 text-lg'>Total Staffs</h2>
                            </div>
                            <div className='flex space-x-3'>
                                <img
                                    src='https://plus.unsplash.com/premium_vector-1714618846503-b44d1d284c6a?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    className='w-25 h-25  object-cover'
                                />
                            </div>
                        </div>
                        <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                            <div>
                                <h2 className='text-gray-600 text-lg'>Total Patient</h2>
                            </div>
                            <div className='flex space-x-3'>
                                <img
                                    src='https://plus.unsplash.com/premium_vector-1682305739336-be469218b857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8'
                                    className='w-25 h-25  object-cover'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="flex-1">
                        <Chart />
                    </div>
                    <div className='flex gap-6'>


                        <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                            <div>
                                <h2 className='text-gray-600 text-lg'>New Patient</h2>
                            </div>
                            <div className='flex space-x-3'>
                                <div className='flex flex-row justify-center items-end rounded-full  p-4 bg-green-200'>25</div>
                            </div>
                        </div>
                        <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                            <div>
                                <h2 className='text-gray-600 text-lg'>Old Patient</h2>
                            </div>
                            <div className='flex space-x-3'>
                                <div className='flex flex-row justify-center items-end rounded-full  p-4 bg-red-200'>20</div>
                            </div>
                        </div>
                        <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                            <div>
                                <h2 className='text-gray-600 text-lg'>Today Patient</h2>
                            </div>
                            <div className='flex space-x-3'>
                                <div className='flex flex-row justify-center items-end rounded-full  p-4 bg-yellow-200'>15</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <Department />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Admindashboard
