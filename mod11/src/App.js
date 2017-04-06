import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DisplayCount = ({count}) => (
  <div>
    Count = {count}
  </div>
);



class AddCount extends Component {
  constructor(){
    super();
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.increment();
  }
  render() {
    const {count} = this.props  ;
    return (
      <div>
        Count = {count}
        <button onClick={this.increment}>Add</button>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }
  render() {
    const {count} = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AddCount count={count} increment={this.increment}/>
        <DisplayCount count={count} />
      </div>
    );
  }
}

export default App;
