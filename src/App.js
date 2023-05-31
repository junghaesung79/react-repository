import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;