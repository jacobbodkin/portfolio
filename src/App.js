import React, { Component } from 'react';

import './css/App.css';

import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">

        <Nav />
        <Portfolio />

      </div>
    );
  }
}

export default App;
