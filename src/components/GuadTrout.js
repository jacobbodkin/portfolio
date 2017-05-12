import React, { Component } from 'react';

import ImageGallery from './ImageGallery';
import Footer from './Footer';

class GuadTrout extends Component {
  constructor(props) {
    super(props)

    this.state= ({
      photoSetId: '72157683579418036'
    })
  }

  render() {
    return (
      <div className="about">
        <div className="galleries">
          <ImageGallery photoSetId={ this.state.photoSetId } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default GuadTrout;
