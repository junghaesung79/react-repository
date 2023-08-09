import React from 'react';
import {Link,} from "react-router-dom";
import styled from 'styled-components';
import './LoginApp.css';
import CatImage from './components/Cat-image';

const Button = styled.button`
  height: 40px;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  width: ${(props) => props.btnStyle === "icon" ?  "40px" : "80px"};
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.background || "gray"};
`;

function LoginApp() {
  return (
  <div className='container'>
    <CatImage />
    <div className="inup-btn-box">
      <Link to="login">
        <Button>
          Login
        </Button>
      </Link>
      <Link to="signup">
        <Button>
          SignUp
        </Button>
      </Link>
    </div>
  </div>
  );
}

export default LoginApp;