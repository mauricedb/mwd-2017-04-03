import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Link, Switch} from 'react-router-dom';

import HomePage from './HomePage';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

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

        {/*<a href='/'>Home</a>
        <a href='/page1'>Page one</a>
        <a href='/page2'>Page two</a>*/}
        <Link to="/">Home</Link>
        <Link to="/page1"> Page 1 </Link>
        <Link to="/page2"> Page 2 </Link>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/page1" component={PageOne} />
          <Route path="/page2" component={PageTwo} />
          <Route render={() => <div>This is a 404</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
