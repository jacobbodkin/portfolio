import React, { Component } from 'react';

import '../css/Portfolio.css';


class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images:[
        {
          key: 0,
          url: './images/landing1.jpg',
          active: 'active'
        },
        {
          key: 1,
          url: './images/landing2.jpg',
          active: 'transparent'
        },
        {
          key: 2,
          url: './images/landing3.jpg',
          active: 'transparent'
        },
        {
          key: 3,
          url: './images/landing4.jpg',
          active: 'transparent'
        },
        {
          key: 4,
          url: './images/landing5.jpg',
          active: 'transparent'
        },
        {
          key: 5,
          url: './images/landing6.jpg',
          active: 'transparent'
        },
      ]
    }
  }

  nextImage() {
    let current = null;
    for (let i=0, x=this.state.images.length; i<x; i++) {
      if (this.state.images[i].active === 'active') {
        current = i;
        break
      }
    }
    if(current === this.state.images.length-1) {
      this.state.images[current].active = 'transparent'
      this.state.images[0].active = 'active'
      this.setState({
        images: this.state.images
      })
    } else {
      this.state.images[current].active = 'transparent'
      this.state.images[current+1].active = 'active'
      this.setState({
        images: this.state.images
      })
    }
  }

  previousImage() {
    let current = null;
    for (let i=0, x=this.state.images.length; i<x; i++) {
      if (this.state.images[i].active === 'active') {
        current = i;
        break
      }
    }
    if(current === 0) {
      this.state.images[current].active = 'transparent'
      this.state.images[this.state.images.length-1].active = 'active'
      this.setState({
        images: this.state.images
      })
    } else {
      this.state.images[current].active = 'transparent'
      this.state.images[current-1].active = 'active'
      this.setState({
        images: this.state.images
      })
    }
  }

  directSelection(e) {
    const next = e.currentTarget.dataset.id;
    let current = null;

    for (let i=0, x=this.state.images.length; i<x; i++) {
      if (this.state.images[i].active === 'active') {
        current = i;
        break
      }
    }

    this.state.images[current].active = 'transparent'
    this.state.images[next].active = 'active'
    this.setState({
      images: this.state.images
    })
  }


  render() {

    const markers = this.state.images.map((image)=>{
      return (
        <li
          onClick={ (e) => this.directSelection(e) }
          data-id={ image.key }
          key={ image.key }
          data-target="#myCarousel"
          data-slide-to={ `${ image.key }` }
          className={ image.active }
          ></li>
      )
    })

    const images = this.state.images.map((image)=>{

        return (
          <div key={ image.key } className={ `item ${ image.active }` }>

            {/* Set the background image using inline CSS below. */}
            <div className="fill" style={ { backgroundImage: `url(${ image.url })` } }></div>
          </div>
        )
    })

    return (
      <div className="portfolio">
        <div className="clickables row">
          <div onClick={ () => this.previousImage() } className="col-6 clickLeft"></div>
          <div onClick={ () => this.nextImage() } className="col-6 clickRight"></div>
        </div>
        <header id="myCarousel" className="carousel slide">
          {/* Indicators */}
          <ol className="carousel-indicators">
            { markers }
          </ol>
          {/* Wrapper for Slides */}
          <div className="carousel-inner">
              { images }
          </div>
        </header>
      </div>
    );
  }
}

export default Portfolio;
