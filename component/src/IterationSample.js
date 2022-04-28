import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames ] = useState([
        {id : 0, text: '짱구'},
        {id : 1, text: '유리'},
        {id : 2, text: '철수'},
        {id : 3, text: '맹구'},
        {id : 4, text: '훈이'},
    ]);
    const [nextId, setNextId] = useState(names.length); // 새로운 항목을 추가할 때 사용할 id
    const [inputText, setInputText] = useState(''); // 새로운 항목을 추가할 때 사용할 text
    
    const onChange = e => setInputText(e.target.value);
    const appendName = () => {
        const nextNames = names.concat({
            id: nextId,
            text:inputText
        });
        // 배열에 새 항목을 추가할 때 사용
        // nextID와 inputText가 추가된 배열 생성
        setNames(nextNames); // names 새로 할당
        setNextId(nextId + 1);
        setInputText(''); // inputText 비워줌
        console.log(nextNames);
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            appendName();
        }
    };

    const deleteName = e => {
        const newNames = names.filter(name => name.id !== parseInt(e.target.id))
        // e.target.id의 자료형은 정수형이 아니므로 int형으로 바꿔줌
        for (var i = 0; i < newNames.length ; i ++) {
            newNames[i].id = i
        }
        
        setNames(newNames);
        
    }
    const nameList = names.map(name => 
            <li key = {name.id}> 
                {name.text} 
                <button id = {name.id} onClick = {deleteName}>x</button> 
            </li>
    )
        
    return (
        <div>
            <input 
                value = {inputText}
                onChange = {onChange}
                placeholder = '짱구의 등장인물'
                onKeyPress={onKeyPress}
            />
            <button onClick = {appendName}>추가</button>
            <ul>{nameList}</ul>
        </div>
             
    )
}

export default IterationSample;