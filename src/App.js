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
import Lifestyle from './components/Lifestyle';
import GuadTrout from './components/GuadTrout';
import Howler from './components/Howler';
import Waterloo from './components/Waterloo';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App container-fluid">

          <Nav />
            <Route exact path="/" component={ () => <Portfolio /> } />
            <Route path="/video" component={ () => <Video /> }/>
            <Route path="/about" component={ () => <About /> }/>
            <Route path="/contact" component={ () => <Contact /> }/>
            <Route path="/climbing" component={ () => <Climbing /> }/>
            <Route path="/lifestyle" component={ () => <Lifestyle /> }/>
            <Route path="/guadtroutflyfishing" component={ () => <GuadTrout /> }/>
            <Route path="/howler+bote" component={ () => <Howler /> }/>
            <Route path="/waterloo+tribeza" component={ () => <Waterloo /> }/>
        </div>
      </Router>
    );
  }
}

export default App;
