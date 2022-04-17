import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children, favoriteNum}) => {
    return (
        <div> 
            안뇽 내 이름은 {name}야 <br/>
            children 값은 {children}입니다.<br/>
            제일 좋아하는 숫자는 {favoriteNum}이야
        </div> 
    ) ;
};

MyComponent.defalutProps = {
    name : "기본 이름"
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNum : PropTypes.isRequired
};

export default MyComponent;