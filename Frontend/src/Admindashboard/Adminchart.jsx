import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart } from "recharts";

const recovery = [
    { name: 'Jan', cold: 18, fracture: 27, heart: 9 },
    { name: 'Feb', cold: 10, fracture: 37, heart: 22 },
    { name: 'Mar', cold: 25, fracture: 22, heart: 12 },
    { name: 'Apr', cold: 12, fracture: 33, heart: 18 },
    { name: 'May', cold: 35, fracture: 45, heart: 25 },
    { name: 'Jun', cold: 30, fracture: 35, heart: 15 },
    { name: 'Jul', cold: 41, fracture: 44, heart: 18 }
];
const patient = [
    { name: 'Jan', admited: 120, opd: 75 },
    { name: 'Feb', admited: 145, opd: 60 },
    { name: 'Mar', admited: 160, opd: 115 },
    { name: 'Apr', admited: 156, opd: 110 },
    { name: 'May', admited: 135, opd: 80 },
    { name: 'Jun', admited: 139, opd: 115 },
    { name: 'Jul', admited: 145, opd: 80 }
];
const Chart = () => {
    return (
        <>
            <div className='flex flex-row gap-10 justify-center items-start shadow-xl/30'>
                <div className='w-[600px]'>
                    <h1 className='text-center'>Recovery Statistics</h1>
                    <LineChart width={500} height={300} data={recovery}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend iconType='circle' />
                        <Line type="monotone" dataKey="cold" fill="#339485ff" dot={{ stroke: "blue", strokeWidth: 2, fill: "blue" }} />
                        <Line type="monotone" dataKey="fracture" fill="#db0303ff" dot={{ stroke: "red", strokeWidth: 2, fill: "red" }} />
                        <Line type="monotone" dataKey="heart" fill="#850672ff" dot={{ stroke: "pink", strokeWidth: 2, fill: "pink" }} />
                    </LineChart>
                </div>

                <div className='w-[600px]'>
                    <div>
                        <h1 style={{ textAlign: "center" }}>Patient Statistics</h1>
                        <BarChart width={500} height={300} data={patient}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="admited" stackId="a" fill="#cde114ff" />
                            <Bar dataKey="opd" stackId="a" fill="#1825d1ff" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chart;