import React from "react";

// Timer Component - countdown timer for each question

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  // Checks remaining time and redirects if duration exceeds
  tick() {
    const { duration, timeoutFn } = this.props;
    if (this.state.seconds === duration) {
      timeoutFn();
    } else {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000); // Sets interval time
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { duration } = this.props;
    let timeLeft = duration - this.state.seconds;
    return (
      <div className="timer">
        <span>0:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
      </div>
    );
  }
}
