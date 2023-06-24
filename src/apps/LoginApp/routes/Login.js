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
          <input type='text' className='login-id-input'/>
          <input type='password' className='login-password-input'/>
        </div>
        <button className='login-login-submit-btn'>로그인</button>
      </div>
    </div>
  </div>
  );
}

export default Login;