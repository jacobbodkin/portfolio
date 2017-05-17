import React, { Component } from 'react';
import $ from 'jquery';

import Footer from './Footer';

import '../css/About.css';

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clientIcons: ['./images/clients/aac-logo.jpg','./images/clients/abp-logo.jpg', './images/clients/afm-logo.png', './images/clients/bote-logo.png', './images/clients/bro-logo.png', './images/clients/climbing-logo.jpg', './images/clients/crossfitcentral-logo.jpg', './images/clients/dpm-logo.gif', './images/clients/evolv-logo.gif', './images/clients/grasssticks-logo.png', './images/clients/howlerbros-logo.jpg', './images/clients/ifa-logo.jpg', './images/clients/llbean-logo.png', './images/clients/rab-logo.jpg', './images/clients/rockice-logo.png', './images/clients/scarpa-logo.jpg']
    }
  }


  render() {

    const clients = this.state.clientIcons.map((client) => {
      return (
        <div key={ client } className="col-md-2 col-3 clientIcon">
          <img src={ client } className="icon"/>
        </div>
      )
    })

    return (
      <div className="about">
        <div className="description row align-items-center">
          <div className="descImageSet col-md-5 col-12 row align-items-center">
            <div className="descImages col-5">
              <img className="col-12 descImage" src="./images/about/about3.jpeg" />
              <img className="col-12 descImage" src="./images/about/about1.jpeg" />
            </div>
            <div className="descImages col-7">
              <img className="col-12 descImage descImageHero" src="./images/about/about2.jpeg" />
            </div>
          </div>
          <div className="descText col-md-7 col-12">
            <p>I grew up in Texas loving to climb anything and everything. Trees were good, chossy cliffs worked, but the mountains are what truly fed the craving. Going to school for engineering never really felt right, but climbing did, so every weekend and free moment was devoted to it. Climbing led to more climbing led to bigger climbing trips. I picked up a camera to remember the epics (ok, maybe to scare my mom a little bit once I got home ) and soon climbing trips were as much about the photography as they were about the climbing. Like climbing, I could express myself visually and physically through photography in a way that felt natural, a medium that I could immerse myself in. After years working a nine to five and waiting for every holiday and weekend, I struck out on my own to make my passions my life.</p>
            <br/>
            <p>Austin, TX based, feel free to give me a call or shoot me an email. I'm always happy to talk shop or about a project you are excited about.</p>
            <br/>
            <p>If you are into architecture, see my architectural photo work at <a className="descText" href="http://jacobbodkinphoto.com" target="_blank">jacobbodkinphoto.com</a>.</p>
          </div>
        </div>

        <hr />

        <div className="clientList">
          <h2 className="clientTitle">Select Clients Include:</h2>
          <div className="clients row align-items-center">
            { clients }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
