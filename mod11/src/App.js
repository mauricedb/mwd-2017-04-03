import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const createIncrement = () => ({type: 'increment-count'});

const store = {
   count:10,
   otherCount: 1
};

const listener = [];

const dispatch = action => {
  switch (action.type){
    case 'increment-count':
      store.count++;
      break;
  }

  console.log(store)
  listener.forEach(l => l.forceUpdate())
}

class DisplayCountPresenation extends Component {
  render() {
    var count = this.props.countToDisplay;
    return (
      <div>
        Count = {count}
      </div>
    );
  }
}

class DisplayCountControler extends Component
{
  componentDidMount(){
    listener.push(this);
  }
  render(){
    return <DisplayCountPresenation countToDisplay={store.count} />
  }  
}


class AddCount extends Component {
  componentDidMount(){
    listener.push(this);
  }
  increment() {
    var action = createIncrement();
    dispatch(action)
  }
  render() {
    const {count} = store;
    return (
      <div>
        Count = {count}
        <button onClick={this.increment}>Add</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AddCount />
        <DisplayCountControler />
      </div>
    );
  }
}

export default App;
