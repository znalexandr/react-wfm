import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Toyota Sprinter', year: '1988'},
      {name: 'Hyundai Elantra', year: '2007'},
    ],
    pageTitle: 'React Component'
  }

  changeTitleHandler = () => {
    const oldTitle = this.state.pageTitle;
    const newTitle = oldTitle + ' (changed)';

    this.setState({
      pageTitle: newTitle
    })
  }

  render() {

    const styleWrap = {
      textAlign: 'center'
    }
    const cars = this.state.cars;

    return (
      <div className="App" style={styleWrap}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.changeTitleHandler}>Change title</button>
        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
      </div>
    );
  }
}

export default App;
