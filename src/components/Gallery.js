import React, { Component } from 'react';

import '../css/Gallery.css';

import Image from './Image';

class Gallery extends Component {
  constructor(props) {
    super(props)


  }
  render() {

    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    console.log(requestAnimationFrame)

    const images = this.props.images.map((image)=>{

      return (
        <Image
          orientation={ image.orientation }
          url={ image.url }
          key={ image.key }
        />
      )
    })

    return (
      <div className="gallery row">
        { images }
      </div>
    );
  }
}

export default Gallery;
