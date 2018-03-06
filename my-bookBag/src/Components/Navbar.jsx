import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Login extends Component {

  constructor(props){
    super(props);
    this.state ={account: {username: '',password: ''}, isLoggedIn: false};


    this.handleChangeFor = this.handleChangeFor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFor = (propertyName) => (event) => {
    const {account} = this.state;
    const newAccount = {
      ...account,
      [propertyName]:event.target.value
    };

    this.setState({account: newAccount});

  }

  handleSubmit(event) {
    if(this.state.account.username == 'Karl'){
      this.isLoggedIn = true;
    }else{
      event.preventDefault();
    }
  }

  render(){
    return(
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="col">


                  <input type="text" className="form-control" placeholder="Username" value={this.state.account.username} onChange={this.handleChangeFor('username')} />
                </div>

                <div className="col">
                  <input type="text" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChangeFor('password')} />
                </div>

                <div className="sm-col">
                  <button type="submit" className="btn btn-info" value="Login">
                  Login
                  </button>
                </div>

              </div>
            </form>



    )
  }
}



class Navbar extends Component {

  constructor( props){
    super(props)

    this.state = {
      header: 'About',
      content: 'Hey',
      isLoggedIn: false
    }
  }

  logout(){
    this.setState({
      header: "Login",
      content: <Login />,
      isLoggedIn: false
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
      content: 'Settings info'
    })
  }

  about(){
    this.setState({
      header: 'Help',
      content: 'About Us'
    })
  }


  render(){

    const isLoggedIn = this.state.isLoggedIn;

    let LoginButton = null;
    let AccountButton = null;

    if (isLoggedIn) {
      LoginButton = <a href='#' onClick={this.logout.bind(this)}>Logout</a>;
      AccountButton = <a href='#' onClick={this.about.bind(this)}>Account</a>;
    } else {
      LoginButton = <a href='#' onClick={this.login.bind(this)}>Login</a>;
      AccountButton = <a href='#' onClick={this.login.bind(this)}>Register</a>;
    }

    return(

    <header>
          <div class="collapse bg-dark" id="navbarHeader">
            <div class="container">
              <div class="row">
                <div class="v col-sm-7 col-md-7 py-4">
                  <h4 class="text-white">{this.state.header}</h4>
                  <p class="text-muted"> {this.state.content}</p>
                </div>
                <div class="b col-sm-1 py-4">
                <h5>
                  <ul class="list-unstyled">
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
          <div class="navbar navbar-dark bg-dark box-shadow">
            <div class="container d-flex justify-content-between">
              <a href="#" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                <strong>Book Bag</strong>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>

    );
  }
}

export default Navbar;
