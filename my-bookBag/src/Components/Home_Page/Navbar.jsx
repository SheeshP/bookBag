import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Toggle from './Toggle.jsx';
import Settings from './Settings.jsx';
import Login from './Login.jsx';


class Navbar extends Component {

  constructor( props){
    super(props)

    this.state = {
      header: 'About',
      content: 'Clutter from book bags becomes a hassle; having loose papers everywhere and notes that are hard to find. We are a group of guys trying to make our lives and others less cluttered. Our product is trying to simplify the organization of a real bookbag through the creation of a virtual bookbag web application.'
    }
  }

  account(){
    this.setState({
      header: "Account",
      content: <Login/>,
      isLoggedIn: true
    })
  }

  login(){
    this.setState({
      header: "Login",
      content: <Login />,
      isLoggedIn: true
    })
  }
  settings() {
    this.setState({
      header: 'Settings',
      content: <Settings/>
    })
  }

  about(){
    this.setState({
      header: 'About',
      content: 'Clutter from book bags becomes a hassle; having loose papers everywhere and notes that are hard to find. We are a group of guys trying to make our lives and others less cluttered. Our product is trying to simplify the organization of a real bookbag through the creation of a virtual bookbag web application.'
    })
  }

  register(){
    this.setState({
      header: "Register",
      content: <form className="form-inline">
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Username"  />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Password"  />
          </div>
          <div className="sm-col">
              <button type="submit" className="btn btn-info" value="Sign-Up" onClick={this.account.bind(this)}>Sign-Up</button>
          </div>
        </div>
      </form>,
      isLoggedIn: false

    })
  }

  render(){

    const isLoggedIn = this.state.isLoggedIn;

    let LoginButton = null;
    let AccountButton = null;

    if (isLoggedIn) {
      //LoginButton = <a href='#' onClick={this.login.bind(this)}>Login</a>;
      AccountButton = <a href='#' onClick={this.register.bind(this)}>Register</a>;
    } else {
      AccountButton = <a href='#' onClick={this.account.bind(this)}>Account</a>;
      //AccountButton = <a href='#' onClick={this.login.bind(this)}>Register</a>;
    }

    return(

      <div>
          <div className="collapse bg-dark" id="navbarHeader">
            <div className="container-fluid">
              <div className="row">
                <div className="v col-sm-7 col-md-10 py-4">
                  <h3 className="text-white">{this.state.header}</h3>
                  <p className="text-muted"> {this.state.content}</p>
                </div>
                <div className="b col-sm-1 py-4">
                <h5>
                  <ul className="list-unstyled">
                    <li>{ LoginButton} </li>
                    <li>{ AccountButton} </li>
                    <li><a href="#" onClick={this.settings.bind(this)}>Settings</a></li>
                    <li><a href="#" onClick={this.about.bind(this)}>About</a></li>
                  </ul>
              </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container-fluid">
              <a href="#" className="navbar-brand d-flex align-items-center">

                <svg className="bag" xmlns="http://www.w3.org/2000/svg" width = "35" viewBox="0 0 496 496"><path d="M96 112V23.2c0-12 4.8-23.2 16.8-23.2H168c12 0 24 11.2 24 23.2V48" fill="#5e6664"/><g fill="#2f423f"><path d="M112 0h56c12 0 24 11.2 24 23.2V48M400 112V23.2c0-12-7.2-23.2-19.2-23.2h-56c-12 0-20.8 11.2-20.8 23.2V48"/></g><path d="M80 456H55.2c-28 0-23.2-25.6-23.2-53.6v-104c0-28 21.6-49.6 50.4-49.6" fill="#ffc114"/><g fill="#fca12a"><path d="M32 367.2v34.4c0 28.8-4.8 54.4 23.2 54.4H80l1.6-138.4L32 367.2zM416 456h24.8c28 0 23.2-25.6 23.2-53.6v-104c0-28-21.6-49.6-50.4-49.6"/></g><path d="M425.6 404c0 50.4-40.8 92-91.2 92h-172c-50.4 0-91.2-41.6-91.2-92l18.4-264.8C88.8 88.8 129.6 48 180 48h135.2c50.4 0 91.2 40.8 91.2 91.2L425.6 404z" fill="#f15249"/><path d="M384 372c0 37.6-30.4 68-68 68H188c-37.6 0-68-30.4-68-68s30.4-68 68-68h128c37.6 0 68 30.4 68 68z" fill="#45c2b3"/><path d="M407.2 139.2C407.2 88 366.4 48 316 48h-68v257.6L187.2 448l59.2 48h87.2c50.4 0 91.2-41.6 91.2-92l-17.6-264.8z" fill="#c93131"/><path d="M380 376c0 38.4-31.2 72-69.6 72H185.6c-38.4 0-69.6-33.6-69.6-72s-5.6-72 32.8-72h198.4c37.6 0 32.8 33.6 32.8 72z" fill="#3cc676"/><path d="M248 304h98.4c38.4 0 32.8 33.6 32.8 72s-31.2 72-69.6 72H184" fill="#0aa06e"/><path d="M263.2 255.2c-8 8-21.6 8-30.4 0l-45.6-45.6c-8-8-8-21.6 0-30.4l45.6-45.6c8-8 21.6-8 30.4 0l45.6 45.6c8 8 8 21.6 0 30.4l-45.6 45.6z" fill="#c93131"/><path d="M260.8 236.8c-7.2 7.2-18.4 7.2-25.6 0L196 197.6c-7.2-7.2-7.2-18.4 0-25.6l39.2-39.2c7.2-7.2 18.4-7.2 25.6 0L300 172c7.2 7.2 7.2 18.4 0 25.6l-39.2 39.2z" fill="#ffc114"/><path d="M247.2 128c4.8 0 9.6 1.6 13.6 5.6l39.2 39.2c7.2 7.2 7.2 18.4 0 25.6l-39.2 39.2c-3.2 3.2-8 5.6-12.8 5.6" fill="#ff8a15"/><g fill="#2f423f"><path d="M240 199.2c0 2.4-4.8 4.8-8 4.8s-8-2.4-8-4.8v-28c0-2.4 4.8-4.8 8-4.8s8 2.4 8 4.8v28zM272 199.2c0 2.4-4.8 4.8-8 4.8s-8-2.4-8-4.8v-28c0-2.4 4.8-4.8 8-4.8s8 2.4 8 4.8v28z"/></g></svg>

              </a>
              <div class="titleLoc">
                  <strong>BookBag</strong>
              </div>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

    </div>
    );
  }
}



export default Navbar;
