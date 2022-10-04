import React, { Component } from 'react';
// import css from './Feedback.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleFeedbackGood = () => {
    this.setState(prevState => {
      return {
        good: this.state.good + 1,
      };
    });

    console.log(this.state);
  };

  handleFeedbackNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });

    console.log(this.state);
  };

  handleFeedbackBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });

    console.log(this.state);
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad,
    });
    console.log(this.state);
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleFeedbackGood}>
          Good
        </button>
        <button type="button" onClick={this.handleFeedbackNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleFeedbackBad}>
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
