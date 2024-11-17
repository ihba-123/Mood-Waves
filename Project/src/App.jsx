import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Outlet/Root';
import About from './components/About';
import Contact from './components/Contact';
import OurScience from './components/OurScience';
import Home from './components/Home';
import GoogleLogin from './components/GoogleLogin';

function App() {
  const router = createBrowserRouter([
   
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'About',
          element: <About />,
        },
        {
          path: 'OurScience',
          element: <OurScience />,
        },
        {
          path: 'Contact',
          element: <Contact />,
        },
        {
          path: 'GoogleLogin',
          element: <GoogleLogin />,
        },
      
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
