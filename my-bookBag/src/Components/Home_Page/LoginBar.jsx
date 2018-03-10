import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class LoginBar extends Component {

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
export default LoginBar
