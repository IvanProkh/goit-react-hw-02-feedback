import React from 'react';

const Statistics = () => (
  <div>
    <h2>Statistics</h2>
    <ul>
      <li>Good: {this.state.good}</li>
      <li>Neutral: {this.state.neutral}</li>
      <li>Bad: {this.state.bad}</li>
      {/* <li>Total: {total}</li>
      <li>Positive feedback: {positiveFeedback}%</li> */}
    </ul>
  </div>
);

export default Statistics;
