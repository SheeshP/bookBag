import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import './Cal.css';


 class Cal extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }
  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  }
  render() {
    return (
      <div class="calendar">

        <DayPicker
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}

        />
      </div>
    );
  }
}export default Cal;
