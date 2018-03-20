import React, {Component} from 'react';
import Toggle from './Toggle.jsx';

class Login extends Component {

  constructor(props){
    super(props);
    this.state ={account: {username: '',password: ''}, isLoggedIn: false};

  }

  render(){
    return(
            <form className="form-inline">
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Username" value={this.state.username}  />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Password" value={this.state.password}  />
                </div>
                <div className="sm-col">
                  <Toggle />
                </div>
              </div>
            </form>
    )
  }
}
export default Login;
