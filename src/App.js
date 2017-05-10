import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './css/App.css';

import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Video from './components/Video';
import About from './components/About';
import Contact from './components/Contact';
import Climbing from './components/Climbing';

class App extends Component {
  constructor(props) {
    super(props)


  }

  render() {


    return (
      <Router>
        <div className="App container-fluid">

          <Nav/>
            <Route exact path="/" component={ () => <Portfolio /> } />
            <Route path="/video" component={ () => <Video /> }/>
            <Route path="/about" component={ () => <About /> }/>
            <Route path="/contact" component={ () => <Contact /> }/>
            <Route path="/climbing" component={ () => <Climbing /> }/>

        </div>
      </Router>
    );
  }
}

export default App;
