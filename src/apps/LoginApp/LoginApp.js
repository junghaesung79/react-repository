import React from 'react';
import {Link,} from "react-router-dom";
import './LoginApp.css';
import CatImage from './components/cat-image';

function LoginApp() {
  return (
  <div className='container'>
    <CatImage />
    <div className="inup-btn-box">
      <Link to="login" className="link-style"><div>Login</div></Link>
      <Link to="signup" className="link-style"><div>SignUp</div></Link>
    </div>
  </div>
  );
}

export default LoginApp;