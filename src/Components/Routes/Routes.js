import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import About from "../About/About";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: async () => {
            return fetch('https://restcountries.com/v3.1/all')
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
        ],

    },
    { path: '*', element: <NotFound></NotFound> },

]);
export default router