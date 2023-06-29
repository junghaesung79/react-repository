import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100px;
  height: 100px;

  background: ${(props) => props.background || "white"};
`;

function Box({ children, background }) {
  return (
    <StyledBox background={background} >
      {children}
    </StyledBox>
  );
}

export default Box;