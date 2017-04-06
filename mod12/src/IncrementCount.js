import React, { Component } from 'react';
import {connect} from 'react-redux';

import {createIncrement} from './action';

class IncrementCount extends Component {
    render() {
        // const counter = this.props.counter;
        // const increment = this.props.increment;
        const {counter, increment} = this.props;

        return (
            <div>
                Count = {counter}
                <button onClick={increment}>Increment</button>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            counter: state.counter
        };
    },
    dispatch => ({
        increment: () => dispatch(createIncrement())
    })

)(IncrementCount);