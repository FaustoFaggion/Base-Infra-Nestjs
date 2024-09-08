import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/auth/signin'
import Signup from './components/auth/signup';
import Root from './components/root/root';
import Profile from './components/user/profile/profile';
import HomePage from './components/homepage/homepage';
import NotFound from './components/homepage/notFound';

function App() {

  const router = createBrowserRouter([
    {
      path: '/signin',
      element: <Signin />,
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          index: true 
        },
        {
          path: '/profile',
          element: <Profile />
        }
      ]
    },
  ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;