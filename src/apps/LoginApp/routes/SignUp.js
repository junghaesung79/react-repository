import React from 'react';
import '../LoginApp.css';
import CatImage from '../components/cat-image';

function SignUp() {
  return <div className="container">
    <CatImage />
    <div className="signup-function-container">
      <div className="signup-function">
        <div className="signup-input-box">
          <input type="email" className="signup-input-id" placeholder="id"/>
          <input type="password" className="signup-input-pw" placeholder="password"/>
          <input type="password" className="signup-input-pw-check" placeholder="password check"/>
          <input type="text" className="signup-input-student-id" placeholder="student ID"/>
          <div className="signup-major"></div>
          <input type="text" className="signup-input-phone-number" placeholder="phone number"/>
        </div>
        <div className='signup-submit-btn-box'>
          <button className="signup-submit-btn">가입</button>
          <button className="signup-cancel-btn">취소</button>
        </div>
      </div>
    </div>
    </div>;
}

export default SignUp;