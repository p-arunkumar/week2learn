import React, { Component } from 'react';


class KanyeRobot extends Component {
  render() {
    return (
      <div>
      <h2> Kanyebot 5000</h2>
      <p>Im gunna let you finish but Beyonce is {this.props.greeting}. </p>
      </div>
    );
  }
}

export default KanyeRobot;
