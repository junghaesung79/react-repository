import styled from "styled-components";

const StyledTextBox = styled.div`
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

function TextBox({ children }) {

  return (
    <StyledTextBox>
      {children}
    </StyledTextBox>
  )
}

export default TextBox;