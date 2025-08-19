import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";


const analysis = [
    { name: "Nitrogen", value: 10 },
    { name: "Oxygen", value: 45 },
    { name: "Calcium", value: 7 },
    { name: "Carbon", value: 20 },
    { name: "Other", value: 5 },
    { name: "Hydrogen", value: 16 },
];
const patient = [
    { name: 'Jan', value: 8 },
    { name: 'Feb', value: 9 },
    { name: 'Mar', value: 2 },
    { name: 'Apr', value: 4 },
    { name: 'May', value: 7 },
    { name: 'Jun', value: 5 },
    { name: 'Jul', value: 6 }
];
const totalSegments = 100
const Percentage = 75
const data = Array.from({ length: totalSegments }, (_, i) => ({
    value: 1,
    filled: i < Percentage,
}))
const COLORS = ["#c1c11cff", "#398208ff", "#6f0b86ff", "#e7851dff", "#ea3a3aff", "#0ed8e2ff"];
function Patientchart() {
    return (
        <div>
            <div className='flex flex-row gap-10 justify-center items-start shadow-xl/30 p-4'>
                <div className='w-[600px]'>
                    <h1 className='text-center'>Recovery Statistics</h1>
                    <ResponsiveContainer width="100%" height={300} data={analysis}>
                        <PieChart>
                            <Pie
                                data={analysis}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={100}
                                dataKey="value"
                                label
                            >
                                {analysis.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className='w-[300px]'>
                    <h1 className='text-center'>Recovery Progress</h1>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={100}
                            startAngle={180}
                            endAngle={-180}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((_entry, index) => (
                                <Cell key={`cell-${index}`} fill={_entry.filled ? "#c5c51a" : "#eee"} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>

                <div className='w-[600px]'>

                    <h1 style={{ textAlign: "center" }}>Calories Statictis</h1>
                    <ResponsiveContainer width="100%" height={300} >
                        <BarChart data={patient}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#78dae7ff" barSize={15} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>


    )
}

export default Patientchart
