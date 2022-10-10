import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import About from "../About/About";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";
import Blog from "../Blog/Blog";
import Topics from "../Topics/Topics";
import QuizDetails from "../QuizDetails/QuizDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/`)
        },
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/topics',
                element: <Topics></Topics>,
            },
            {
                path:'/qz/:qzid',
                loader: async ({params}) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.qzid}`)
                },
                element: <QuizDetails></QuizDetails>
            },
        ],

    },
    { path: '*', element: <NotFound></NotFound> },

]);
export default router