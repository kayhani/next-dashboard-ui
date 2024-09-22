"use client"

import Image from "next/image";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
 
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,

    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,

    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,

    },
    {
        name: 'Jun',
        uv: 1890,
        pv: 4800,
  
    },
    {
        name: 'Jul',
        uv: 2390,
        pv: 3800,
  
    },
    {
        name: 'Aug',
        uv: 3490,
        pv: 4300,

    },
    
    {
        name: 'Sep',
        uv: 2780,
        pv: 3908,

    },
    {
        name: 'Oct',
        uv: 1890,
        pv: 4800,
  
    },
    {
        name: 'Nov',
        uv: 2390,
        pv: 3800,
  
    },
    {
        name: 'Dec',
        uv: 3490,
        pv: 4300,

    },
];


const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt="Finance" width={20} height={20} />
            </div>
            {/* CHART */}
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}

export default FinanceChart