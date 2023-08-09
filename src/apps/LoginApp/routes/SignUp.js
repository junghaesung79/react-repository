import React, { useEffect, useRef } from 'react';
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
`

const TextBox = styled.div`
  width: 164px;
  height: 20px;
  display:flex;
  justify-content: center;
  
  border: 1px solid black;
  border-radius: 3px;
  
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 0.8rem;
	color: black;

  background-color: ${(props) => props.children ? "white" : "#e9ecef"};
`

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
`

function SignUp() {
  const major = '컴퓨터공학부';
  class signupForm {
    constructor(props) {
      this.index = 0;
      this.id = 'example@example.com';
      this.password = 'example';
      this.studentId = 2020100000;
      this.phoneNumber = 1012341234;
    }
  }
  
  const userDataRef = useRef({})
  userDataRef.current = new signupForm();
  const userData = userDataRef.current;
  const userId = useRef();
  const userPassword = useRef();
  const userStudentId = useRef();
  const userPhoneNumber = useRef();
  useEffect(()=>{
    if (!localStorage.getItem('user')) {localStorage.setItem('user', '[]')}
  },[])

  const navigate = useNavigate();
  
  function changeUserData() {
    userData.index = JSON.parse(localStorage.getItem('user')).length;
    [userData.id, userData.password, userData.studentId, userData.phoneNumber] 
    = [userId.current.value, userPassword.current.value, userStudentId.current.value, userPhoneNumber.current.value]
    return userData
  }
  function handleSignupSubmitButton() {
    const userDataFromLocal = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('user', JSON.stringify([...userDataFromLocal, changeUserData()]));
    navigate('/loginapp')
  }
  function handleSignupCancelButton() {
    navigate('/loginapp')
  }

  return <div className="container">
    <CatImage />
    <div className="signup-function-container">
      <div className="signup-function">
        <div className="signup-input-box">
          <Input ref={userId} type={"email"} placeholder={"id"} />
          <Input ref={userPassword} type={"text"} placeholder={"password"} />
          <Input type={"text"} placeholder={"password check"} />
          <Input ref={userStudentId} type={"text"} placeholder={"student ID"} />
          <TextBox>{major}</TextBox>
          <Input ref={userPhoneNumber} type={"text"} placeholder={"phone number"} />
        </div>
        <div className='signup-submit-btn-box'>
          <Button onClick={handleSignupSubmitButton} type={"submit"}>가입</Button>
          <Button onClick={handleSignupCancelButton} type={"submit"}>취소</Button>
        </div>
      </div>
    </div>
    </div>;
}

export default SignUp;