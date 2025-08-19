import React from 'react'

function Card() {
    const role = localStorage.getItem("role")
    const name = localStorage.getItem("name")

    const displayname = role === "doctor" ? `Dr.${name}` : name;
    return (

        <div className="w-[300px] max-w-md mx-auto shadow-lg rounded-2xl bg-teal-50 ">
            <div className="p-6 text-center">
                <h1 className='text-gray-600 text-lg'>Hi! {displayname}</h1>
                <p className='mt-2 text-sm opacity-90'>
                    Welcome your {role} Dashboard
                </p>
            </div>
        </div>

    )
}

export default Card
