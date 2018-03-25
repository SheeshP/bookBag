import React, { Component } from 'react';
import Calendar from 'react-calendar';


class Cal extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="cal">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}export default Cal;
