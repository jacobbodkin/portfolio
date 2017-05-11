import React, { Component } from 'react';

import ImageGallery from './ImageGallery';

class Lifestyle extends Component {
  constructor(props) {
    super(props)

    this.state= ({
      photoSetId: '72157683679775915'
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

export default Lifestyle;
