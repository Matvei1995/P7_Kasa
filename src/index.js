import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './Pages/About/Abouts';
import LodgingPages from './Pages/LodgingPages/LodgingPages';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';


function Layout(){
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};


const router = createBrowserRouter([
  
  { element: <Layout />,
  errorElement: <ErrorPage />,
  
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Lodging/:id',
      element: <LodgingPages />,
    },
  ],
   
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);
