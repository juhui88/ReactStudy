import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number = {number} onIncrease = {increase} onDecrease = {decrease} />
    ) 
}

export default connect(
    state =>({
        number: state.counter.number,
    }),
    {
        increase, decrease
    },
    /*dispatch => 
        bindActionCreators(
            {increase, decrease},
            dispatch,
        ),*/
    /*( {
        increase: () => dispatch(increase()),
        decrease : () => dispatch(decrease()),
    }),*/
)(CounterContainer);

/*
const mapStateToProps = state => ({
    number: state.counter.number,
})

const mapDispatchToProps = dispatch => ({
    // 임시 함수
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);*/