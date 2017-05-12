import React, { Component } from 'react';

import ImageGallery from './ImageGallery';
import Footer from './Footer';

class Waterloo extends Component {
  constructor(props) {
    super(props)

    this.state= ({
      photoSetId: '72157683579741096'
    })
  }

  render() {
    return (
      <div className="waterloo">
        <div className="galleries">
          <ImageGallery photoSetId={ this.state.photoSetId } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Waterloo;
