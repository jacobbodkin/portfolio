import React, { Component } from 'react';

import ImageGallery from './ImageGallery';

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
        <ImageGallery photoSetId={ this.state.photoSetId } />
      </div>
    );
  }
}

export default GuadTrout;
