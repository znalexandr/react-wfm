import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const styleWrap = {
      textAlign: 'center'
    }

    return (
      <div className="App" style={styleWrap}>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

export default App;
