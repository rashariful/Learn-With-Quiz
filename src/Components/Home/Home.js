import React, { useContext } from 'react';
import { MyQuizContext } from '../Layout/Root';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const myQuiz = useContext(MyQuizContext)
    
    return (
        <section>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
                       
                        <div className="xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24">
                            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">05 Most Asked Interview Questions</h1>

                            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">If you are a complete beginner then in this article, we will dive into the top 100 important Web development Interview Questions and Answers.</p>

                            <form className="w-full md:max-w-md flex gap-2">
                                <input placeholder="Email" className="w-full flex-1 bg-gray-50 text-gray-800 placeholder-gray-500 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />

                                <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Subscribe</button>
                            </form>
                        </div>
                       
                        <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
                            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200611200432/Top-10-System-Design-Interview-Questions-and-Answers.png" loading="lazy" alt="Photo by Programming hero student designed" className="h-full min-w-full  object-fill object-center" />
                        </div>
                       
                    </div>
                </div>
            </div>
           
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 mb-20 mt-10 max-w-screen-2xl px-4 md:px-8 mx-auto '>
                {
                    myQuiz.data.map(qz => 
                        <Quiz
                            qz={qz}
                        ></Quiz>
                       
                    )
                }
       </div>
           
        </section>
    );
};

export default Home;