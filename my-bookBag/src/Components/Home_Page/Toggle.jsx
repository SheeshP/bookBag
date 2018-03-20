import React, {Component} from 'react';

class Toggle extends Component {
  constructor(props){
    super(props)

    this.state = {isToggleIn: true};
    this.handleLoginClick = this.handleLoginClick.bind(this);

  }

  handleLoginClick() {
    this.setState(prevState =>({
      isToggleIn: !prevState.isToggleIn
    }

  ));


  }

  render() {
      return(
        <button type="button" className="btn btn-info" onClick={this.handleLoginClick}>
        {this.state.isToggleIn ? 'Login' : 'Logout'}
      </button>

    );
  }





}
export default Toggle
