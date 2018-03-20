import React, { Component } from 'react';
import Navbar from '../Components/Home_Page/Navbar.jsx';

import './Editor.css';

class Editor extends Component {

  render(){
    return(
      <div>


<Navbar/>
      <div class="grid">


        <aside class="sidebar-left">
          <div>
          <h1>Hello</h1>
          </div>
        </aside>


        <article>
          Article
        </article>

        <aside class="sidebar-right">
          Right Sidebar
        </aside>


      </div>
      </div>


      );
    }
}
export default Editor;
