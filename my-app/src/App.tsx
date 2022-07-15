import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  
`
const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`

function App() {
  return (
    <Container>
      <H1>Hi</H1>
    </Container>
  );
}

export default App;

// required 여부 정하기 , 볼덜컬러가 있으면 사용 없으면 백그라운드 컬러 사용 