import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  render() {

    const styleWrap = {
      textAlign: 'center'
    }

    return (
      <div className="App" style={styleWrap}>
        <h1>Hello world!</h1>
        <Car name="Toyota Sprinter" year="1988"/>
        <Car name="Hyundai Elantra" year="2007"/>
      </div>
    );
  }
}

export default App;
