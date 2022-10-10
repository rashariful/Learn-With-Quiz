import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quiz = useLoaderData()
    console.log(quiz.data);
    return (
        <section className='mx-auto px-10 py-10'>
            <h1 className='font-bold text-4xl text-indigo-800 text-center py-6'>Quiz of {quiz.data.name}</h1>
            
            {
                quiz.data.questions.map(qs => <Question
                
                    key={qs.id}
                    qs={qs}

                ></Question>)

            }
              
          
        </section>
    );
};

export default QuizDetails;