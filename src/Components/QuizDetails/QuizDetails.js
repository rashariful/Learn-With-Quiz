import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData()
    console.log(quiz.data);
    return (
        <section className='mx-auto px-10 py-10'>
                <h1 className='font-bold text-4xl text-indigo-800 text-center py-6'>Quiz of {quiz.data.name}</h1>
                    <h3 className='font-semibold text-center'>Quiz 01: </h3>
                <div className='grid grid-cols-2 w-52 mx-auto shadow-md py-5 gap-3'>
                    
                        <div className='border border-indigo-500 py-4 px-6 rounded-md'>
                            <p>{}</p>
                        </div>
                        <div className='border border-indigo-500 py-4 px-6 rounded-md'>
                            <p>{}</p>
                        </div>
                        <div className='border border-indigo-500 py-4 px-6 rounded-md'>
                            <p>{}</p>
                        </div>
                        <div className='border border-indigo-500 py-4 px-6 rounded-md'>
                            <p>{}</p>
                        </div>
                        
                </div>
        </section>
    );
};

export default QuizDetails;