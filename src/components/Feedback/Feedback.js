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
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      // good: prevState.good + 1,
    }));
    // console.log(this.state);

    this.setState(prevState => {
      console.log(prevState);

      return { good: prevState.good + 1 };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));

    console.log(this.state);
  };

  handleIncrementBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });

    console.log(this.state);
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
    console.log('плюс');
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button
          type="button"
          // onClick={() => {
          //   this.handleIncrementGood();
          //   this.countTotalFeedback();
          // }}
          onClick={this.handleIncrementGood}
          onChange={this.countTotalFeedback}
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
        <p>Total: {total}</p>
        <p>Positive feedback: {this.state.positiveFeedback}%</p>
      </div>
    );
  }
}

export default Feedback;
