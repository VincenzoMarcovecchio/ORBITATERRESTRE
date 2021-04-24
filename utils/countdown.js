import React from "react";
import moment from "moment";

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
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

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

    return (
      <div className="absolute backdrop-filter  backdrop-opacity-80 max-h-11  -top-0 inset-1 ">
        <div className="countdown-wrapper">
          <div className="countdown-item">
            {days}&nbsp;
            <span>giorni</span>
          </div>
          <div className="countdown-item">
            {hours}&nbsp;
            <span>ore</span>
          </div>
          <div className="countdown-item">
            {minutes}&nbsp;
            <span>minuti</span>
          </div>
          <div className="countdown-item">
            {seconds}&nbsp;
            <span>secondi</span>
          </div>
        </div>
      </div>
    );
  }
}
