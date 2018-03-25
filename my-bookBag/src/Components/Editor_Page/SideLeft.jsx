import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideLeft.css';
import Cal from './Cal.jsx';

class SideLeft extends Component {


  render () {
    return (


      <Menu right>
  
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>

    );
  }
}export default SideLeft;
