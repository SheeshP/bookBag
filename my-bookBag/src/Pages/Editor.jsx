import React, { Component } from 'react';
import Navbar from '../Components/Home_Page/Navbar.jsx';
import Nav from '../Components/Editor_Page/Nav.jsx';
import './Editor.css';

class Editor extends Component {

  render(){
    return(
      <div>

      <div>

      <Navbar/>
      </div>
      <Nav/>

      </div>


      );
    }
}
export default Editor;
