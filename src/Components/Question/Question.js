import React, { useState } from 'react';
import CorrectAnswer from '../CorrectAnswer/CorrectAnswer';

const Question = ({qs}) => {

    const [ans, setAns] = useState([])


    const handleclicked = (options)=>{
       
        console.log(options);
       
    }

    const { question } = qs
    return (
        <div>

            <p className='text-center'>quiz: {}</p>
            <h3 className='font-semibold text-center'>{question}</h3>
            <div>

            {
                qs.options.map(op => 
                <div className='text-center my-3 border border-indigo-500 py-4 w-96 mx-auto rounded-md shadow-md' 
                
                
                op={op}>{op} 
                <div className='mt-4 bg-indigo-400'>
                            <input onChange={() => handleclicked(op)} type="radio" name="quiz" id="" />
                </div>
                 </div>)
            }
            
            </div>
       
        </div>
    );
};

export default Question;