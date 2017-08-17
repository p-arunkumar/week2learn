import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import moon from './bettermoon.gif';

class Tron extends Component {
  render() {
    return (
      <div>
        <Jumbotron className = "Jumbo">
        <div className = "Header"><img className= "moon" src = {moon} alt = {'moonstuff'}/>NASA</div>
        </Jumbotron>
      </div>
    );
  }
}

export default Tron;
