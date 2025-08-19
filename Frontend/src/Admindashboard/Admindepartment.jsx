import React from 'react'

function Department() {
    return (
        <div>
            <div className='flex gap-6'>


                <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                    <div>
                        <h2 className='text-gray-600 text-lg'>Cardiology</h2>
                        <div className='flex flex-row justify-center items-end rounded-full  p-4 bg-green-200'>25</div>
                    </div>
                    <div className='flex space-x-3'>
                        <img
                            src='https://plus.unsplash.com/premium_vector-1725498874800-49ea959a5368?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='w-25 h-25  object-cover'
                        />
                    </div>
                </div>
                <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                    <div>
                        <h2 className='text-gray-600 text-lg'>Orthopedics</h2>
                        <div className='flex flex-row justify-center items-end rounded-full  p-4 bg-green-200'>10</div>
                    </div>
                    <div className='flex space-x-3'>
                        <img
                            src='https://plus.unsplash.com/premium_vector-1726065008180-80714a645638?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8'
                            className='w-25 h-25  object-cover'
                        />
                    </div>
                </div>
                <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                    <div>
                        <h2 className='text-gray-600 text-lg'>General OPD</h2>
                        <div className='flex flex-row justify-center items-end rounded-full  p-4 bg-green-200'>20</div>
                    </div>
                    <div className='flex space-x-3'>
                        <img
                            src='https://plus.unsplash.com/premium_vector-1724672970115-3b8ef4f3165b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
                            className='w-25 h-25  object-cover'
                        />
                    </div>
                </div>
                <div className='w-80 shadow-lg rounded-xl p-4 flex items-center justify-between'>
                    <div>
                        <h2 className='text-gray-600 text-lg'>Neurology</h2>
                        <div className='flex flex-row justify-center items-end rounded-full  p-4 bg-green-200'>10</div>
                    </div>
                    <div className='flex space-x-3'>
                        <img
                            src='https://plus.unsplash.com/premium_vector-1726297593118-ec7d2a2d5a83?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            className='w-25 h-25  object-cover'
                        />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Department
