import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  
  display: flex;


  flex-direction: row;
  justify-content: start;
  align-items: start;
  
  flex-direction: row;
  justify-content: start;
  align-items: center;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  justify-content:start;
  align-items: center;

`

function Container({ children, type, }) {
  // type: top, bottom, center, column

  return (
    <StyledContainer type={type}>
      {children}
    </StyledContainer>
  )
}