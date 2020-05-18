import React from 'react';
import moment from 'moment';
import './countdown.css';

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <div className='countdown-wrapper'>
          {days && (
            <div className='countdown-item'>
              {days}
              <span>jours</span>
            </div>
          )}
          {hours && (
            <div className='countdown-item'>
              {hours}
              <span>heurs</span>
            </div>
          )}
          {minutes && (
            <div className='countdown-item'>
              {minutes}
              <span>minutes</span>
            </div>
          )}
          {seconds && (
            <div className='countdown-item text-warning'>
              {seconds}
              <span>secondes</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Countdown;
