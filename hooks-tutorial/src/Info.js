import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name]);

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    return (
        <div>
            <input 
                placeholder='이름을 입력하세요'
                onChange = {onChangeName}
                value = {name}
            >
            </input>
            <input
                placeholder='나이를 입력하세요'
                onChange = {onChangeAge}
                value = {age}
            >
            </input>
            
            <p> 이름 : {name}</p>
            <p> 나이 : {age}</p>
        </div>
    )
}

export default Info;