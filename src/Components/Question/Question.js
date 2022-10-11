import React, { useState } from 'react';
import CorrectAnswer from '../CorrectAnswer/CorrectAnswer';

const Question = ({qs}) => {
console.log(qs);
    const [ans, setAns] = useState([])
    console.log(ans);

    const handleclicked = (qs)=>{
        const CorrectAnswer = qs.options.CorrectAnswer;
       
        setAns(CorrectAnswer)
        console.log(CorrectAnswer);
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
                            <input onChange={() => handleclicked(qs)} type="radio" name="quiz" id="" />
                </div>
                 </div>)
            }
            
            </div>
       
        </div>
    );
};

export default Question;