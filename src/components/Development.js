import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Footer from './Footer';

import '../css/Development.css';

class Development extends Component {
  constructor(props) {
    super(props)

  }

  render() {


    return(
      <div className="development row justify-content-center">
        <div className="projects row justify-content-center col-12">

          <a href="https://github.com/jacobbodkin/wethepeople" className="col-12 col-md-6 col-lg-4 wtp row" target="_blank">
            <div className="figure col-12 light">
              <img src="./images/wethepeople.png" alt="Thumb" />
              <div className="figcaption">
                <div className="lightTitle">We the People</div>
              </div>
            </div>
          </a>

          <Link to="/" className="col-12 col-md-6 col-lg-4 row">
            <div className="figure col-12">
              <img src="./images/jbp.png" alt="Thumb" />
              <div className="figcaption">
                <div>Jacob Bodkin Photo</div>
              </div>
            </div>
          </Link>

          <a href="https://supply-the-love.herokuapp.com/" className="col-12 col-md-6 col-lg-4 row" target="_blank">
            <div className="figure col-12 ">
              <img src="./images/slv.png" alt="Thumb" />
              <div className="figcaption">
                <div>Supply the Love</div>
              </div>
            </div>
          </a>

          <a href="https://jacobbodkin.github.io/blackjack-game/" className="col-12 col-md-6 col-lg-4 row" target="_blank">
            <div className="figure col-12">
              <img src="./images/blackjack.png" alt="Thumb" />
              <div className="figcaption">
                <div>Blackjack</div>
              </div>
            </div>
          </a>

        </div>




        <Footer />
      </div>
    )
  }
}

export default Development;