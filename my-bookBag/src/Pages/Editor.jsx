import React, { Component } from 'react';
import Navbar from '../Components/Home_Page/Navbar.jsx';
import Nav from '../Components/Editor_Page/Nav.jsx';
import SideLeft from '../Components/Editor_Page/SideLeft.jsx';
import './Editor.css';

class Editor extends Component {

  render(){
    return(


<div class="jum">

<Navbar/>
  <SideLeft pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
<Nav/>
</div>



      );
    }
}
export default Editor;
