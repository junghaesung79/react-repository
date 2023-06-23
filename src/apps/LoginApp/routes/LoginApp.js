import React from 'react';
import {Link,} from "react-router-dom";
import '../LoginApp.css';
import CatImage from '../components/cat-image';

function LoginApp() {
  return (
  <div>
    <CatImage />
    <div className="signup-btn-box">
      <div><Link to="login">Login</Link></div>
      <div><Link to="signup">SignUp</Link></div>
    </div>
  </div>
  );
}

export default LoginApp;