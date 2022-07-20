import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  position: absolute;
  top: 100px;
`;
const boxVariants = {
  entry: (back: boolean) => ({
    x: back ? -200 : 200,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (back:boolean) => ({
    x: back ? 200 : -200, 
    opacity: 0, 
    scale: 0, 
    transition: {
      duration: 0.5
    }
  })
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back , setBack] = useState(false);
  const nextPlease = () => {
    setVisible(prev => prev === 10? 10 : prev + 1)
    setBack(false);
  };
  const prevPlease = () => {
    setVisible(prev => prev === 1 ? 1 : prev - 1)
    setBack(true);
  };
  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter custom={back}>
        {[1,2,3,4,5,6,7,8,9,10].map(i => i === visible ? 
          <Box 
            custom={back}
            key = {visible}
            variants={boxVariants}
            initial = "entry" 
            animate="center"
            exit = "exit" >
              {visible}
          </Box> : null)}
      </AnimatePresence>
      <button onClick = {nextPlease}>NEXT</button>
      <button onClick = {prevPlease}>PREV</button>
     </Wrapper> 
  );
}

export default App;