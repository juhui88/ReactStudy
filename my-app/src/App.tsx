import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';


function App() {
  return (
    <div>
      <Circle borderColor = "yellow" bgColor = "teal"/>
      <Circle text = "hi~" bgColor = "tomato"/>
    </div>
  );
}

export default App;

// required 여부 정하기 , 볼덜컬러가 있으면 사용 없으면 백그라운드 컬러 사용 