import React, { Component } from 'react';
// import Feedback from './Feedback/Feedback';
import Statistics from 'Statistics';
console.log('~ Statistics', Statistics);

class App extends Component {
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
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100) || 0;
  };

  render() {
    const total = this.countTotalFeedback();
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

        <Statistics />

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

export default App;

// class Counter extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveFeedback = options => {
//     this.setState({ [options]: this.state[options] + 1 });
//   };
//   totalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   positiveFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return Math.round((good / total) * 100) || 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const { leaveFeedback, totalFeedback, positiveFeedback } = this;

//     return (
//       <Container>
//         <Section title="Please leave your feedback" />

//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={leaveFeedback}
//         />

//         <Section title="Statistics" />

//         {totalFeedback() ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             onTotalFeedback={totalFeedback()}
//             onPositiveFeedback={positiveFeedback()}
//           />

//         ) : (
//           <h2>There is no feedback</h2>
//         )}
//       </Container>
//     );
//   }
// }
// export default Counter;
