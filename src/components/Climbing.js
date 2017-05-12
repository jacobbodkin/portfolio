import React, { Component } from 'react';

import ImageGallery from './ImageGallery';
import Footer from './Footer';

import '../css/galleries.css';

class Climbing extends Component {
  constructor(props) {
    super(props)

    this.state= ({
      photoSetId: '72157681535129721'
    })
  }

  render() {
    return (
      <div className="climbing">
        <div className="galleries">
          <ImageGallery photoSetId={ this.state.photoSetId } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Climbing;
