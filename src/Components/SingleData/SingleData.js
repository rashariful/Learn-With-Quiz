import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const SingleData = ({singledata}) => {
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];
    const {name, total, id} = singledata
    console.log(name);
    console.log(total);
    console.log(id);
    return (
        <div>
          
            
        </div>
    );
};

export default SingleData;