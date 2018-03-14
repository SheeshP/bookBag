import React, {Component} from 'react';
import Toggle from './Toggle.jsx';

class Login extends Component {

  constructor(props){
    super(props);
    this.state ={account: {username: '',password: ''}, isLoggedIn: false};
    this.handleChangeFor = this.handleChangeFor.bind(this);

  }

  handleChangeFor = (propertyName) => (event) => {
    const {account} = this.state;
    const newAccount = {
      ...account,
      [propertyName]:event.target.value
    };

    this.setState({account: newAccount});

  }

  render(){
    return(
            <form className="form-inline">
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Username" value={this.state.account.username} onChange={this.handleChangeFor('username')} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChangeFor('password')} />
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
