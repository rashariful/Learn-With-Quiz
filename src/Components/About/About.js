import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { MyQuizContext } from '../Layout/Root';
import SingleData from '../SingleData/SingleData';

const About = () => {
    const datasingle = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];

    const data = useContext(MyQuizContext)
    console.log(data.data);
    return (
        <div className='flex justify-center py-52'>
            
            <LineChart width={700} height={400} data={data.data}>
                <Line type="monotone" dataKey='id' stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip></Tooltip>
            </LineChart>



        </div>
    );
};

export default About;