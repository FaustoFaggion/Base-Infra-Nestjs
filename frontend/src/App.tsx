import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/auth/signin'
import Signup from './components/auth/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseAppContext } from './context/hook';
import Profile from './components/user/profile';

function App() {
  const {state} = UseAppContext();

  const userInfo = state.userInfo
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;