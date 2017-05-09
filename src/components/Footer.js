import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer className="row justify-content-between">
        
        <div className="copyright col-2">
          <p>©Jacob Bodkin</p>
        </div>
        <div className="socialLinks col-2">
        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>

      </footer>
    );
  }
}

export default Footer;
