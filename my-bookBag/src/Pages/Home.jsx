import React, { Component } from 'react';
import Navbar from '../Components/Home_Page/Navbar.jsx';
import SetPanel from '../Components/Home_Page/Settings.jsx';
import './Home.css';
import Books from '../Components/Home_Page/Books.jsx';

class Home extends Component {
  render(){
    return(

      <div>
        <header>
          <Navbar />
        </header>
      </div>



      );
    }
}
export default Home;
