import React, { Component } from 'react';
// import css from './Feedback.css';

class Feedback extends Component {
  // static defaultProps = {
  //   value: 0,
  // };
  // static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));

    console.log(this.state);
  };

  handleIncrementNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });

    console.log(this.state);
  };

  handleIncrementBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });

    console.log(this.state);
  };

  countTotalFeedback = () => {
    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad,
    });
    console.log('плюс');
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button
          type="button"
          onClick={() => {
            this.handleIncrementGood();
            this.countTotalFeedback();
          }}
        >
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.state.total}</p>
        <p>Positive feedback: {this.state.positiveFeedback}%</p>
      </div>
    );
  }
}

export default Feedback;
