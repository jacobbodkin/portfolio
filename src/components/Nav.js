import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../css/Nav.css'

import FaBars from 'react-icons/lib/fa/bars';
import FaAngleDown from 'react-icons/lib/fa/angle-down';


class Nav extends Component {
  constructor(props) {
    super(props)

    this.state= {
      navDrop: 'none',
      hamburgerNav: 'none'
    }

  }

  changeNavLook(page) {
    if(page === '/') {
      return 'portfolioNav'
    } else {
      return 'otherNav'
    }
  }

  navDownUp() {
    let css = (this.state.navDrop === 'none') ? 'block' : 'none'
    this.setState({
      navDrop: css
    })
  }

  hamburgerDownUp() {
    let css = (this.state.hamburgerNav === 'none') ? 'block' : 'none'
    this.setState({
      hamburgerNav: css
    })

  }

  resetPage() {
    this.setState({
      navDrop: 'none',
      hamburgerNav: 'none'
    })
  }


  render() {

    const page = window.location.pathname;

    const dropStyle = {
      display: this.state.navDrop
    }

    const hamburgerStyle = {
      display: this.state.hamburgerNav
    }

    let logo = null;
    if (page === '/') {
        logo = <img className="logo" src="./images/JB-Logo_white.png" alt="Jacob Bodkin" />
      } else {
        logo =  <img className="logo" src="./images/JB-Logo_black.png" alt="Jacob Bodkin" />
      }

    return (
      <nav className={ `${ this.changeNavLook(page) }Background navbar navbar-toggleable-sm bg-faded` }>

        <button
          onClick={ () => this.hamburgerDownUp() }
          className={`navbar-toggler navbar-toggler-right ${ this.changeNavLook(page) }` }
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span><FaBars /></span>
        </button>
        <Link onClick={ () => this.resetPage() } to="/" className="navbar-brand">
          { logo }
        </Link>
        <div
          style={ hamburgerStyle }
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <p
                onClick={ () => this.navDownUp() }
                className={ `nav-link ${ this.changeNavLook(page) }` }
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Portfolio
              </p>
              <div
                style={ dropStyle }
                className={ `dropdown-menu` }
                aria-labelledby="navbarDropdownMenuLink"
                >
                <Link
                  to="/climbing"
                  className={ `dropdown-item ${ this.changeNavLook(page) }` }
                  onClick={ () => this.resetPage() }
                  >Climbing</Link>
                <Link
                  to="/lifestyle"
                  className={ `dropdown-item ${ this.changeNavLook(page) }` }
                  onClick={ () => this.resetPage() }
                  >Lifestyle</Link>
                <Link
                  to="/guadtroutflyfishing"
                  className={ `dropdown-item ${ this.changeNavLook(page) }` }
                  onClick={ () => this.resetPage() }
                  >Guadalupe River Fly Fishing</Link>
                <Link
                  to="/howler+bote"
                  className={ `dropdown-item ${ this.changeNavLook(page) }` }
                  onClick={ () => this.resetPage() }
                  >Howler Bros & Bote</Link>
                <Link
                  to="/waterloo+tribeza"
                  className={ `dropdown-item ${ this.changeNavLook(page) }` }
                  onClick={ () => this.resetPage() }
                  >Waterloo Surfcraft & Tribeza</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/video"
                className={ `nav-link ${ this.changeNavLook(page) }` }
                onClick={ () => this.resetPage() }
                >
                  Video
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={ `nav-link ${ this.changeNavLook(page) }` }
                onClick={ () => this.resetPage() }
                >
                  About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={ `nav-link ${ this.changeNavLook(page) }` }
                onClick={ () => this.resetPage() }
                >
                  Contact
              </Link>
            </li>
          </ul>
        </div>

      </nav>

    );
  }
}

export default Nav;
