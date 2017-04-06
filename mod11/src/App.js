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
    this.add = this.add.bind(this);
  }

  add() {
    this.props.add();
  }
  render() {
    const {count} = this.props  ;
    return (
      <div>
        Count = {count}
        <button onClick={this.add}>Add</button>
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
    this.add = this.add.bind(this);
  }

  add() {
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
        <AddCount count={count} add={this.add}/>
        <DisplayCount count={count} />
      </div>
    );
  }
}

export default App;
