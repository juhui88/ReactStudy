import React , {Component} from 'react';

class Counter extends Component {
    state = {
        number: 0
    }
    render() {
        const {number} = this.state // state를 조회할 때는 this.state로 조회함
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick = {() => {
                        this.setState({number : number + 1},
                            () => {console.log(this.state)}
                            );
                }}
                // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                // this.setState를 사용하여 state에 새로운 값 넣을 수 있음
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;