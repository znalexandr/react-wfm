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
        <Car />
      </div>
    );
  }
}

export default App;
