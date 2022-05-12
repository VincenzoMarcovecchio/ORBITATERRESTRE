import React from "react";
import moment from "moment";
import tz from "moment-timezone";

export class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
   
      const then = moment(timeTillDate)
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
    console.log(this.props);
  }
   

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="">
        <div className="countdown-wrapper">
          <div className="countdown-item">
            {days}&nbsp;
            <span>days</span>
          </div>
          <div className="countdown-item">
            {hours}&nbsp;
            <span>hour</span>
          </div>
          <div className="countdown-item">
            {minutes}&nbsp;
            <span>minutes</span>
          </div>
          <div className="countdown-item">
            {seconds}&nbsp;
            <span>seconds</span>
          </div>
        </div>
      </div>
    );
  }
}
