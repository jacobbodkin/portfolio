import React, { Component } from 'react';

import '../css/Image.css';

class Image extends Component {
  constructor(props) {
    super(props)


  }
  render() {


    if(this.props.orientation === 'horizontal') {
      return (
        <div className="col-4 horizontal image">
          <img className="thumbnail" src={ this.props.url } />
        </div>
      )
    } else {
      return (
        <div className="col-3 vertical image ">
          <img className="thumbnail" src={ this.props.url } />
        </div>
      )
    }
  }
}

export default Image;
