import React from 'react';

const Blog = () => {
    return (
        <div className='mb-20'>
            <div classNameName="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mt-10 mb-4 md:mb-6">Some of questions of React js we have to know</h2>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center  mx-auto">React has been designed from the start for gradual adoption, and you can use as little or as much React as you need.</p>
                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">

                        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img src="https://miro.medium.com/max/1400/1*sX8rBJBol5dBp5WIJQrYyw.png" loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">What is the purpose of react router.</a>
                                </h2>

                                <p className="text-gray-500 mb-8">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>

                                <div className="flex justify-between items-end mt-auto">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Brock Wegner" className="w-full h-full object-cover object-center" />
                                        </div>

                                        <div>
                                            <span className="block text-indigo-500">Mike Lane</span>
                                            <span className="block text-gray-400 text-sm">July 19, 2021</span>
                                        </div>
                                    </div>

                                    <span className="text-gray-500 text-sm border rounded px-2 py-1">Article</span>
                                </div>
                            </div>
                        </div>



                        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img src="https://www.loginradius.com/blog/static/caf00c33b55e22e63d32a724e11eea7d/701ee/react.jpg" loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">How does context api work</a>
                                </h2>

                                <p className="text-gray-500 mb-8">The React Context API is a way for a React app to effectively produce global variables that can be passed around.This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is also touted as an easier, lighter approach to state management using Redux.</p>

                                <div className="flex justify-between items-end mt-auto">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                            <img src="https://i.stack.imgur.com/wqvF2.png" loading="lazy" alt="Photo by Jassir Jonis" className="w-full h-full object-cover object-center" />
                                        </div>

                                        <div>
                                            <span className="block text-indigo-500">Tylor Grey</span>
                                            <span className="block text-gray-400 text-sm">March 15, 2021</span>
                                        </div>
                                    </div>

                                    <span className="text-gray-500 text-sm border rounded px-2 py-1">Article</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img src="https://miro.medium.com/max/1200/1*rp5PJMP1LtmLiwVQpReFuQ.jpeg" loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">What is useref hook in react</a>
                                </h2>

                                <p className="text-gray-500 mb-8">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                                </p>

                                <div className="flex justify-between items-end mt-auto">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64" loading="lazy" alt="Photo by Aiony Haust" className="w-full h-full object-cover object-center" />
                                        </div>

                                        <div>
                                            <span className="block text-indigo-500">Ann Park</span>
                                            <span className="block text-gray-400 text-sm">January 27, 2021</span>
                                        </div>
                                    </div>

                                    <span className="text-gray-500 text-sm border rounded px-2 py-1">Article</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;