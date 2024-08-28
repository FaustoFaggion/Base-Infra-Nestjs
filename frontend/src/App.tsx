import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './components/auth/signin'
import Signup from './components/auth/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseAppContext } from './context/hook';
import Profile from './components/user/profile/profile';
import HomePage from './components/homepage/homepage';
import NotFound from './components/homepage/notFound';

function App() {
  const {state} = UseAppContext();

  const userInfo = state.userInfo
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <NotFound />
    }, 
    {
      path: '/signin',
      element: <Signin />,
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/profile',
      element: <Profile />
    }
  ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;