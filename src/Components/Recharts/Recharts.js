import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MyQuizContext } from '../Layout/Root';

const Recharts = () => {
    const data = useContext(MyQuizContext)
 
    return (
        <div className='flex justify-center py-20'>
            <ResponsiveContainer width="70%" height={400}>

            <LineChart data={data.data}>
                <Line type="monotone" dataKey='id' stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip></Tooltip>
            </LineChart>

            </ResponsiveContainer>


        </div>
    );
};

export default Recharts;