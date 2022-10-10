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
                            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Revolutionary way to build the web</h1>

                            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

                            <form className="w-full md:max-w-md flex gap-2">
                                <input placeholder="Email" className="w-full flex-1 bg-gray-50 text-gray-800 placeholder-gray-500 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />

                                <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">Subscribe</button>
                            </form>
                        </div>
                       
                        <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
                            <img src="https://images.unsplash.com/photo-1620206343767-7da98185edd4?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" className="w-full h-full object-cover object-center" />
                        </div>
                       
                    </div>
                </div>
            </div>
           
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 mb-20 mt-10 max-w-screen-2xl px-4 md:px-8 mx-auto '>
                {
                    myQuiz.data.map(qz => <Quiz

                        qz={qz}
                    ></Quiz>)
                }
       </div>
           
        </section>
    );
};

export default Home;