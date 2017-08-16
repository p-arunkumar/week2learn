import React, { Component } from 'react';


class BadRobot extends Component {

  constructor(props){
    super(props)
    this.state = {
      message: 'BLABLABLABLABLABLABLABLABLABLABLABLABLA'
    }
  }

  render() {
    let blaMessage = this.state.message.substring(0, this.props.greeting.length)
    return (
      <div>
        <h2> Bad Robot</h2>
        <p>I hear you saying {blaMessage}. Is that correct?</p>
      </div>
    );
  }
}

export default BadRobot;
