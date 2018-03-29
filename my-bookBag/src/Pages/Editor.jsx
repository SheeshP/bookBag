import React, { Component } from 'react';
import Navbar from '../Components/Home_Page/Navbar.jsx';

import SideLeft from '../Components/Editor_Page/SideLeft.jsx';
import Sideright from '../Components/Editor_Page/Sideright.jsx';

class Editor extends Component {

  render(){
    return(


<div class="jum">


  <SideLeft />
  <Sideright/>

</div>



      );
    }
}
export default Editor;
