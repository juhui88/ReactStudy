import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor : string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color : ${props => props.bgColor};
    border-radius: 100px;
    border: 2px solid ${props => props.borderColor};
`

interface CircleProps{
    bgColor:string;
    borderColor?: string; // 선별적으로 주고 싶을 때 ?: 즉, required은 아님
    text?:string;
}

function Circle({bgColor, borderColor, text = "default text"}: CircleProps) {
    return (
        <Container bgColor = {bgColor} borderColor = {borderColor ?? bgColor} >
            {text}
        </Container> // 초기값 white로 설정
    )
}

export default Circle;