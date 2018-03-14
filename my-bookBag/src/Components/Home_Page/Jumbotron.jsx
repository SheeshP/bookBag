import React, {Component} from 'react';
import './Jumbotron.css'

class Jumbotron extends Component{
  render(){
    return(

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h className="titleTag"><strong>Book Bags</strong></h>
          <p className="lead">{this.props.subtitle}</p>
        </div>
      </div>

    );
  }
}
export default Jumbotron;
