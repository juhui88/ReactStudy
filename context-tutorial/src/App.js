import React from "react";
import ColorBox from "./contexts/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelecColor";
import ColorNoneUse from "./ColorNoneUse";

const App = () => {
  return (
    /*<ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox/>
      </div>
    </ColorProvider>*/
    <div>
      <ColorNoneUse/>
    </div>
    
  )
}

export default App;