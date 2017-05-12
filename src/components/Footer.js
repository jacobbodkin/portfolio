import React, { Component } from 'react';

import '../css/Footer.css'


class Footer extends Component {
  render() {
    return (
      <footer className="row justify-content-between align-items-center">

        <div className="copyright col-4">
          <p className="copyright">©Jacob Bodkin</p>
        </div>
        <div className="socialLinks col-4">
        <a href="https://www.instagram.com/jacob_bodkin/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/jacobbodkinphoto"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="linkedin.com/in/jacob-bodkin"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>

      </footer>
    );
  }
}

export default Footer;
