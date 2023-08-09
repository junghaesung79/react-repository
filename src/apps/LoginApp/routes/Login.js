import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../LoginApp.css';
import CatImage from '../components/Cat-image';

const Input = styled.input`
	width: 160px;
	height: 20px;
	border: 1px solid gray;
	border-radius: 3px;

	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 0.8rem;
	color: black;

	&::placeholder{
		color: #black;
	}

	&:hover{
		border: 1px solid black;
	}

	&:focus{
		color: #black;
		border: 1px solid black};
`;

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

function Login() {
  const navigate = useNavigate();

  const userId = useRef();
  const userPassword = useRef();
  const localUserData = JSON.parse(localStorage.getItem('user'));
  
  function handleLogin() {
    console.log('click')
    // localUserData.map((localUserData)=>{
    //   if (localUserData.id === String(userId.current.id)) {
    //     localUserData.password === String(userPassword.current.password) ? 있으면 : continue;
    //   }
    //   navigate('/loginapp/main') : alert('아이디나 비밀번호를 다시 확인해주십시오.')
    //   alert('없는 아이디입니다.')
    // })
  }

  return (
  <div className='container'>
    <CatImage />
    <div className='login-function-container'>
      <div className='login-function'>
        <div className='login-input-box'>
          <Input ref={userId} type={"email"} placeholder={"id"} />
          <Input ref={userPassword} type={"text"} placeholder={"password"} />
        </div>
        <Button onClick={handleLogin} >로그인</Button>
      </div>
    </div>
  </div>
  );
}

export default Login;