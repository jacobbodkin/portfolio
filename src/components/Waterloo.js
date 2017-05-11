import React, { Component } from 'react';

import ImageGallery from './ImageGallery';

class Waterloo extends Component {
  constructor(props) {
    super(props)

    this.state= ({
      photoSetId: '72157683579741096'
    })
  }

  render() {
    return (
      <div className="about">
        <ImageGallery photoSetId={ this.state.photoSetId } />
      </div>
    );
  }
}

export default Waterloo;
