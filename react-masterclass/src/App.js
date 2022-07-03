import React from 'react';
import styled, {keyframes} from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`
const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  height:100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
`
const rotateAni = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Emoji = styled.span`
  font-size: 35px;
`
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height:100px;
  animation : ${rotateAni} 3s linear infinite;
  display:flex;
  justify-content: center;
  align-items:center;

  &:active {
    opacity:0;
  }
  &:hover{
    width: 150px;
    height:150px;
  }
  ${Emoji} {
    font-size: 50px;
  }
`
const Circle = styled(Box)`
  border-radius: 30px;
`
const Text = styled.span`
  color:white;
`
const Btn = styled.button`
  color: white;
  background-color: pink;
  border:0 ;
  border-radius: 15px;
`
const Input = styled.input.attrs({required:true, value: "hi"})`
  background-color: yellow;
`

function App() {
  return (
    <Wrapper>
      <Title>hello</Title>
    </Wrapper>
  );
}

export default App;
