import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('눌러바');
    // 첫 번째 원소는 현재 상태, 두 번째 원소는 상태를 바꾸어 주는 함수(setter 함수)
    const onClickEnter = () => setMessage('안뇽!');
    const onClickLeave = () => setMessage('잘 가!');

    return (
        <div>
            <button onClick = {onClickEnter}>입장</button>
            <button onClick = {onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    )
}

export default Say;