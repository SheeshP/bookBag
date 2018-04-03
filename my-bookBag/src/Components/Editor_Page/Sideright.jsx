import React, { Component } from 'react';
import './Sideright.css';
import Chat from './Chat.jsx';
import StyleFont from './StyleFont.jsx';
import Friends from './Friends.jsx';

class Sideright extends Component {

  render () {

    return (

          <nav id="sidebar1">
          
          <StyleFont/>
          <Friends/>
            <Chat/>
              </nav>





    );
  }
}export default Sideright;
