import React from 'react';
import '../LoginApp.css';
import CatImage from '../components/cat-image';

function Login() {
  return (
  <div className='container'>
    <CatImage />
    <div className='login-function-container'>
      <div className='login-function'>
        <div className='login-input-box'>
          <input type='text' className='login-input-id'/>
          <input type='password' className='login-input-password'/>
        </div>
        <button className='login-login-submit-btn'>로그인</button>
      </div>
    </div>
  </div>
  );
}

export default Login;