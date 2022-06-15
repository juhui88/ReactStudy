import React from "react";
import styled, {css} from "styled-components";
import StyledComponent from "./StyledComponent";

const Div = styled.div`
  background : aqua;
  color:white;
  border: none;

  ${props => 
    props.bool &&
    css`
      color: black;
      background: yellow;
        `};

  &:hover {
    background: green;
  }
`;


const App = () => {
  return (
    <div>
      <Div bool = {true}>하이</Div>
      <StyledComponent>키키</StyledComponent>
    </div>
  )
}
export default App;

