import React, { Component } from 'react';

import '../css/Gallery.css';

import Gallery from './Gallery';

class Climbing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images:[
        {
          key: 0,
          url: './images/1.jpg',
          orientation: 'horizontal',
          active: ''
        },
        {
          key: 1,
          url: './images/2.jpg',
          orientation: 'horizontal',
          active: ''
        },
        {
          key: 2,
          url: './images/3.jpg',
          orientation: 'horizontal',
          active: ''
        },
        {
          key: 3,
          url: './images/4.jpg',
          orientation: 'vertical',
          active: ''
        },
        {
          key: 4,
          url: './images/5.jpg',
          orientation: 'horizontal',
          active: ''
        },
        {
          key: 5,
          url: './images/6.jpg',
          orientation: 'vertical',
          active: ''
        },
        {
          key: 6,
          url: './images/7.jpg',
          orientation: 'horizontal',
          active: ''
        },
      ]
    }
  }
  render() {

    return (
      <Gallery images={ this.state.images } />
    );
  }
}

export default Climbing;
