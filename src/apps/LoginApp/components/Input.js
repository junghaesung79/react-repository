import styled from 'styled-components';

const InputBox = styled.input`
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

const Input = ({ refs, type, placeholder }) => {
	return <InputBox refs={refs} type={type} placeholder={placeholder}></InputBox>
};

export default Input;