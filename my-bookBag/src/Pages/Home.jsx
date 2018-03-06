import React, { Component } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Jumbotron from '../Components/Jumbotron.jsx';
import Books from '../Components/Books.jsx';

class Home extends Component {
  render(){
    return(

      <div>
        <header>
          <Navbar />
        </header>



        <Books />
      </div>

      );
    }
}
export default Home;
