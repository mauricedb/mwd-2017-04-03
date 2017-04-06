import React, { Component } from 'react';
import {connect} from 'react-redux';

class DisplayCount extends Component {
    render() {
        const {counter} = this.props;
        return (
            <div>
                Count = {counter}
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            counter: state.counter
        };
    }

)(DisplayCount);