import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {scale: 1.5, rotateZ: 180},
  click: {scale: 1, borderRadius: "100px"},
  drag: {backgroundColor : "rgb(253, 121, 168)", transition: {duration:10 }}
}


function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x, 
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ])
    const {scrollYProgress} = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0,1], [1,5])
  return (
    <Wrapper style={{background: gradient}}>
        <Box 
          style = {{x, rotateZ , scale}}
          drag = "x"
          dragSnapToOrigin/>
     </Wrapper> 
  );
}

export default App;