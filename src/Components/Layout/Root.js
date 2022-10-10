import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export const MyQuizContext = createContext()
const Root = () => {
  const myQuiz = useLoaderData()
    return (
      <MyQuizContext.Provider value={myQuiz}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
      </MyQuizContext.Provider>
    );
};

export default Root;