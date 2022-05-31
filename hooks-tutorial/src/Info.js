import React, {useReducer} from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name:'',
        age: ''
    });
    const {name, age} = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <input 
                name = "name"
                placeholder='이름을 입력하세요'
                onChange = {onChange}
                value = {name}
            >
            </input>
            <input
                name = "age"
                placeholder='나이를 입력하세요'
                onChange = {onChange}
                value = {age}
            >
            </input>
            
            <p> 이름 : {name}</p>
            <p> 나이 : {age}</p>
        </div>
    )

}

export default Info;