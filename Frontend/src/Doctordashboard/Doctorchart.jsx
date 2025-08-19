import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart } from "recharts";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const analysis = [
  { name: 'Jan', ICU: 105, OPD: 25 },
  { name: 'Feb', ICU: 75, OPD: 55 },
  { name: 'Mar', ICU: 15, OPD: 30 },
  { name: 'Apr', ICU: 25, OPD: 125 },
  { name: 'May', ICU: 85, OPD: 125 },
  { name: 'Jun', ICU: 25, OPD: 75 },
  { name: 'Jul', ICU: 15, OPD: 60 }
];
const patient = [
  { name: 'Jan', ICU: 25, OPD: 15 },
  { name: 'Feb', ICU: 60, OPD: 55 },
  { name: 'Mar', ICU: 75, OPD: 20 },
  { name: 'Apr', ICU: 75, OPD: 15 },
  { name: 'May', ICU: 55, OPD: 75 },
  { name: 'Jun', ICU: 75, OPD: 20 },
  { name: 'Jul', ICU: 75, OPD: 55 }
];


const shift = [
  { name: "Morning Shift", value: 40 },
  { name: "Afternoon Shift", value: 35 },
  { name: "Night Shift", value: 25 }
];

const COLORS = ["#4ade80", "#60a5fa", "#facc15"];
function Doctorchart() {
  return (
    <div>
      <div className='flex flex-row gap-10 justify-center items-start shadow-xl/30'>
        <div className='w-[600px]'>
          <h1 className='text-center'>Recovery Statistics</h1>
          <LineChart width={500} height={300} data={analysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend iconType='circle' />
            <Line type="monotone" dataKey="ICU" fill="#339485ff" dot={{ stroke: "blue", strokeWidth: 2, fill: "blue" }} />
            <Line type="monotone" dataKey="OPD" fill="#db0303ff" dot={{ stroke: "red", strokeWidth: 2, fill: "red" }} />
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
              <Bar dataKey="ICU" stackId="a" fill="#cde114ff" />
              <Bar dataKey="OPD" stackId="a" fill="#1825d1ff" />
            </BarChart>
          </div>
        </div>
        <div>
          <div className='w-[600px] p-4 h-80'>
            <h1 className='text-center'>Shift Statistics</h1>
            <ResponsiveContainer width="100%" height="100%" data={shift}>
              <PieChart>
                <Pie
                  data={shift}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {shift.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Doctorchart
