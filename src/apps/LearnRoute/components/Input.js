import styled from 'styled-components';

const InputBox = styled.input`
	width: 100px;
	height: 25px;
	border: 1px solid gray;
	border-radius: 5px;

	outline: none;

	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	color: #363636;

	&::placeholder{
		color: #black;
	}

	&:hover{
		border: 1px solid black;
	}

	&:focus{
		color: #363636;
		border: 1px solid red};
`;

const Input = ({placeholder}) => {
	return <InputBox type='text' placeholder={placeholder}/>
};

export default Input;