import React, { Component } from 'react';

import ImageGallery from './ImageGallery';
import Footer from './Footer';

class Howler extends Component {
  constructor(props) {
    super(props)

    this.state= ({
      photoSetId: '72157681777927410'
    })
  }

  render() {
    return (
      <div className="howler">
        <div className="galleries">
          <ImageGallery photoSetId={ this.state.photoSetId } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Howler;
