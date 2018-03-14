import React, { Component } from 'react';
import Navbar from '../Components/Home_Page/Navbar.jsx';
import SetPanel from '../Components/Home_Page/Settings.jsx';
import './Home.css';
import Books from '../Components/Home_Page/Books.jsx';
import Jumbotron from '../Components/Home_Page/Jumbotron.jsx';


class Home extends Component {
  render(){
    return(

      <div class="home">
        <header>

          <Navbar/>
          <Jumbotron title="Book Bags" subtitle="Displayed below is each of your book bags which includes all your notes that you can access."/>
        </header>
        <div className="movebooks">
        <Books/>

        </div>
      </div>



      );
    }
}
export default Home;
