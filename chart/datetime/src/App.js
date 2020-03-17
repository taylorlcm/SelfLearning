import React, { Component } from 'react';
import moment from 'moment';

import {DatetimePicker, DatetimePickerTrigger} from 'rc-datetime-picker/dist/rc-datetime-picker';
import 'rc-datetime-picker/docs/app.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      datetime: moment()
    };
  }

  handleChange = (moment) => {
    this.setState({
      datetime: moment
    });
  }

  render() {
    const shortcuts = {
      'Today': moment(),
      'Yesterday': moment().subtract(1, 'days'),
      'Clear': ''
    };
    const {datetime} = this.state;
    const value = datetime ? datetime.format('YYYY/MM/DD HH:mm') : '';
    
    return (
      <DatetimePickerTrigger 
        shortcuts={shortcuts} 
        moment={datetime} 
        onChange={this.handleChange} 
      >
        <input type="text" value={value} readOnly />
        <span className="fa fa-calendar-o"></span>
      </DatetimePickerTrigger>
    );
  }
}

export default App;
