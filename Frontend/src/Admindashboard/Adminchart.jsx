
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Bar,
    BarChart,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

// Recovery Data
const recovery = [
    { name: "Jan", cold: 18, fracture: 27, heart: 9 },
    { name: "Feb", cold: 10, fracture: 37, heart: 22 },
    { name: "Mar", cold: 25, fracture: 22, heart: 12 },
    { name: "Apr", cold: 12, fracture: 33, heart: 18 },
    { name: "May", cold: 35, fracture: 45, heart: 25 },
    { name: "Jun", cold: 30, fracture: 35, heart: 15 },
    { name: "Jul", cold: 41, fracture: 44, heart: 18 },
];

// Patient Data
const patient = [
    { name: "Jan", admited: 120, opd: 75 },
    { name: "Feb", admited: 145, opd: 60 },
    { name: "Mar", admited: 160, opd: 115 },
    { name: "Apr", admited: 156, opd: 110 },
    { name: "May", admited: 135, opd: 80 },
    { name: "Jun", admited: 139, opd: 115 },
    { name: "Jul", admited: 145, opd: 80 },
];

// Department Shifts (Pie Chart)
const departments = [
    { name: "Cardiology", value: 35 },
    { name: "Orthopedics", value: 25 },
    { name: "Neurology", value: 20 },
    { name: "General", value: 20 },
];

// Pie Chart Colors
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Reusable wrapper
const ChartCard = ({ title, children }) => (
    <div className="w-full md:w-1/3 bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-center text-lg font-semibold mb-2">{title}</h2>
        <div className="w-full h-[260px]">
            <ResponsiveContainer>
                {children}
            </ResponsiveContainer>
        </div>
    </div>
);

const Chart = () => {
    return (
        <div className="flex flex-col md:flex-row  gap-6 justify-center items-start p-6">


            <ChartCard title="Recovery Statistics">
                <LineChart data={recovery}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend iconType="circle" />
                    <Line type="monotone" dataKey="cold" stroke="#339485" dot />
                    <Line type="monotone" dataKey="fracture" stroke="#db0303" dot />
                    <Line type="monotone" dataKey="heart" stroke="#850672" dot />
                </LineChart>
            </ChartCard>

            {/* Patient Chart */}
            <ChartCard title="Patient Statistics">
                <BarChart data={patient}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="admited" stackId="a" fill="#cde114" />
                    <Bar dataKey="opd" stackId="a" fill="#1825d1" />
                </BarChart>
            </ChartCard>

            {/* Department Shift Pie Chart */}
            <ChartCard title="Department Shifts">
                <PieChart>
                    <Pie
                        data={departments}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={85}
                        innerRadius={40}
                        paddingAngle={4}
                        label
                        isAnimationActive={true}
                        animationBegin={100}
                        animationDuration={1200}
                    >
                        {departments.map((_entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                                stroke="#fff"
                                strokeWidth={2}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ChartCard>
        </div>
    );
};

export default Chart;
