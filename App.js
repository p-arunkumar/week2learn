import React, { Component } from 'react';
import './App.css';
import Navb from './Navbar';
import Tron from './Tron';
import Content from './Content';
import moon from './bettermoon.gif';
import neoData from './sample-neo'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      rawData:neoData
      }
    }

componentWillMount(){
  var self = this;

    fetch('http://api.open-notify.org/iss-now.json').then(function(response) {
      return response.json();
    })
    .then(function(response) {
      self.setState({rawData: response})
});

}

componentDidMount(){
  var self = this;
    setInterval(function(){
    fetch('http://api.open-notify.org/iss-now.json').then(function(response) {
      return response.json();
    })
    .then(function(response) {
      self.setState({rawData: response})
});
}, 1000);
}

  render() {
    return (
      <div className="App">
      <script>
      </script>
        <div>
          <Navb />
        </div>
        <div>
          <Tron />
        </div>
        <div>
          <Content/>
        </div>
        <div>
        <h3> International Space Station Coordinates</h3>
        <p> Longitude = {this.state.rawData.iss_position.longitude}<br/>
        Latitude = {this.state.rawData.iss_position.latitude}</p>
        </div>
      </div>
    );
  }
}

export default App;
