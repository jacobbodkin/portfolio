import React, { Component } from 'react';

import ImageGallery from './ImageGallery';
import Footer from './Footer';

class Lifestyle extends Component {
  constructor(props) {
    super(props)

    this.state= ({
      photoSetId: '72157683679775915'
    })
  }

  render() {
    return (
      <div className="lifestyle">
        <div className="galleries">
          <ImageGallery photoSetId={ this.state.photoSetId } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Lifestyle;
