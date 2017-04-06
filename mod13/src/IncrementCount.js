import React, { Component } from "react";

class IncrementCount extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    // this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: this.state.counter + 1 });
    this.setState( state => ({ counter: state.counter + 1 }));
    this.setState( (state, props) => ({ counter: state.counter + 1 }));
  }
  render() {
    const { counter } = this.state;

    return (
      <div>
        Count = {counter}
        <br />
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default IncrementCount;



