import styled from "styled-components";

const StyledButton = styled.button`
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

function Button({ children, onClick, type, btnStyle, color, background, }) {
  //btn-style: icon, 
  return (
    <StyledButton onClick={onClick} type={type} btn-style={btnStyle} color={color} background={background} >
      {children || 'Button'}
    </StyledButton>
  );
}

export default Button