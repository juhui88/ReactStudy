import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    velopert: {
        name: '조땡땡',
        description: '초보 리액트 개발자'
    },
    gildong : {
        name: '고길동',
        description: '아기공룡 둘리에 나오는 아부지'
    }
}

const Profile = () => {
    const {username} = useParams();
    const profile = data[username];
    if(!profile) {
        return <div>존재 하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;