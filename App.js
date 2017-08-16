import React, { Component } from 'react';
import Header from './Header'
import GreetingInput from './GreetingInput'
import GoodRobot from './GoodRobot';
import KanyeRobot from './KanyeRobot';
import BadRobot from './BadRobot';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Bob'
    }
  }

  updateGreeting(greeting){
    this.setState({greeting: greeting})
  }
  render() {
    return (
      <div>
        <div>
          <Header greeting={this.state.greeting} />
        </div>
        <div>
          <GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
        </div>
        <div>
          <GoodRobot greeting= {this.state.greeting}/>
        </div>
        <div>
          <KanyeRobot greeting = {this.state.greeting}/>
        </div>
        <div>
          <BadRobot greeting = {this.state.greeting}/>
      </div>
      </div>
    );
  }
}

export default App;
