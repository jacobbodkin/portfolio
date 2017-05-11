import React, { Component } from 'react';

import ImageGallery from './ImageGallery';

class Howler extends Component {
  constructor(props) {
    super(props)

    this.state= ({
      photoSetId: '72157681777927410'
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

export default Howler;
