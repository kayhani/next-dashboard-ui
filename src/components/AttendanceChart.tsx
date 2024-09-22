"use client"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";


const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 12,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 9,
  },
  {
    name: 'Wed',
    present: 80,
    absent: 13,
  },
  {
    name: 'Thu',
    present: 55,
    absent: 21,
  },
  {
    name: 'Fri',
    present: 60,
    absent: 11,
  },
];
const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="/moreDark.png" alt="Attendance" width={20} height={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer>
        <BarChart width={500} height={300} data={data} barSize={20} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: 'lightgray' }} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={
              {
                paddingTop: "20px",
                paddingBottom: "20px"
              }
            }
          />
          <Bar dataKey="absent" fill="#C3EBFA" activeBar={<Rectangle fill="pink" stroke="purple" />} legendType="circle" radius={[10, 10, 0, 0]} />
          <Bar dataKey="present" fill="#FAE27C" activeBar={<Rectangle fill="gold" stroke="yellow" />} legendType="circle" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart