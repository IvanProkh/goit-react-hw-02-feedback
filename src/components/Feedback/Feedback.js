import React, { Component } from 'react';
// import css from './Feedback.css';

class Feedback extends Component {
  // static defaultProps = {
  //   positiveFeedback: 0,
  // };
  // static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    console.log('плюс');
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = total => {
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    console.log('~ total', total);
    const positiveFeedback = this.countPositiveFeedbackPercentage(total);
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
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positiveFeedback}%</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;

// <Statistics good={ } neutral={ } bad={ } total={ } positivePercentage={ }></Statistics>
// <FeedbackOptions options={ } onLeaveFeedback={ }>

// </FeedbackOptions>
