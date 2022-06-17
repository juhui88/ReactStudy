import React, {useContext} from 'react';
import ColorContext, {ColorConsumer} from './color';


const ColorBox = () => {
    const {state} = useContext(ColorContext);
    return (
        <ColorConsumer>
            {value => (
                <div>
                    <div
                        style = {{
                            width: '64px',
                            height: '64px',
                            background: state.color
                        }}
                    />
                    <div
                        style = {{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor
                        }}
                    />
                </div>
                
            )}
        </ColorConsumer>
    )
}

export default ColorBox;