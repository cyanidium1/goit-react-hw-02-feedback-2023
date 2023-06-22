import { Component } from 'react';
import Feedback from './Feedback/Feedback';

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
    console.log(option);
  };

  render() {
    return (
      <Feedback
        increase={this.increase}
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
      />
    );
  }
}
