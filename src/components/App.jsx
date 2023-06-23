import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Stats from './Stats/Stats';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increase = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  percentage = () => {
    return Math.round(
      (this.state.good / (this.state.good + this.state.bad)) * 100
    );
  };

  render() {
    return (
      <>
        <h2>Stats</h2>
        <Feedback increase={this.increase} />
        <Stats
          params={this.state}
          total={this.total()}
          percentage={this.percentage()}
        />
      </>
    );
  }
}
