import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <h1>Say something: {this.props.greeting} </h1>
    );
  }
}

export default Header;
