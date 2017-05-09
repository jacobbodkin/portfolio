import React, { Component } from 'react';

import '../css/Nav.css'


class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md bg-faded">

        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img className="logo" src="./images/JB-Logo_white.png" alt="Jacob Bodkin" />
        </a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portfolio
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Climbing</a>
                <a className="dropdown-item" href="#">Lifestyle</a>
                <a className="dropdown-item" href="#">LL Bean Trail Running</a>
                <a className="dropdown-item" href="#">Howler Bros & Bote</a>
                <a className="dropdown-item" href="#">Waterloo Surfcraft & Tribeza</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Video</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>

      </nav>

    );
  }
}

export default Nav;
