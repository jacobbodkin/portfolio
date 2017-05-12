import React, { Component } from 'react';

import Footer from './Footer';

import '../css/Video.css';

class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoList: [
        {
          title: 'Southwest Boulderfest 2017',
          source: 'https://player.vimeo.com/video/194525200?title=0&byline=0&portrait=0',
        },
        {
          title: 'Waterloo Surfcraft Wakesurf Board Shaping',
          source: 'https://player.vimeo.com/video/143287229?title=0&byline=0&portrait=0',
        },
        {
          title: 'Yosemite on a Rainy Day',
          source: 'https://player.vimeo.com/video/128377329?title=0&byline=0&portrait=0',
        },
      ]
    }
  }
  render() {

    const videos = this.state.videoList.map((video) => {
      return (

        <iframe className="col-12 col-md-6" key={ video.source } src={ video.source } allowFullScreen></iframe>
      )
    })

    return(
      <div className="video">
        <div className="videoList row justify-content-center">
          { videos }
        </div>
        <Footer />
      </div>
    )
  }
}

export default Video;
