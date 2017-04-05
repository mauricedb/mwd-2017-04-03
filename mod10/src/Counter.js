import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <button className="btn btn-default" onclick={this.onClick}>
          Click the button
        </button>
      </div>
    );
  }
}

export default Counter;
