import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Clock extends Component {
  constructor(){
    super();
    this.state = {
      now: new Date(),
      name: 'Maurice'
    };


    // this.onClick = this.onClick.bind(this);
  }

  componentDidMount(){
   this.interval = setInterval(() => {
      // this.state.now = new Date();
      this.setState({now:new Date()});
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  onClick = (e) => {
    // console.log(e)
    this.setState({name: 'Bob'});
  }

  onChange = e => {
    this.setState({name: e.target.value})
  }
  render() {
    console.log('renders')
    return <div>
    {this.state.now.toLocaleTimeString()} 
    <br/>
    <button onClick={this.onClick}>Click me</button>
    hello {this.state.name}

    <input type='text' value={this.state.name} onChange={this.onChange} />
    <input type='text' defaultValue={this.state.name} />
    </div>;
  }
}

class Hello extends Component {
  render() {
    // const name = 'Maurice';
// const name = new Date().toString();
const {name} = this.props;

    return <span>Hello {name} </span>;
  }
}

class App extends Component {
  render() {
var name = 'Mike';

  var people = [
    {id:1, name: 'Mary'},
    {id:2, name: 'Jack'},
    {id:3, name: 'Bob'},
    {id:4, name: 'Bob'}
  ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Hello name="Joe"/>
          <br/>
          <Hello name={name}/>
        </p>

        <ul>
          {people.map((p, index) => <Hello key={p.id} name={p.name} />)}
        </ul>
        <Clock />
      </div>
    );
  }
}

export default App;
