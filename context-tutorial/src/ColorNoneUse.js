import React,{useState} from "react";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


const ColorNoneUse = () => {
    const [color, setColor] = useState("black");

    const onClick = (e) => {
        console.log(e.target);
        setColor(e.target.style.background)
    }
    return (
        <div>
            <div style = {{display:"flex"}}>
                {colors.map(c => (
                    <div 
                        key = {c}
                        style = {{
                            background: c,
                            height:"30px",
                            width:"30px"
                            }}
                        onClick = {onClick}
                        />
                ))}
            </div>
            <div style= {{
                background:color,
                height:"70px",
                width:"70px"
                }}></div>
        </div>
    )
}

export default ColorNoneUse;

