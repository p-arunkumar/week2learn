import React, { Component } from 'react';


class GoodRobot extends Component {
  render() {
    return (
      <div>
      <h2> Good Robot</h2>
      <p>I hear you saying {this.props.greeting}. Is that correct? </p>
      </div>
    );
  }
}

export default GoodRobot;
