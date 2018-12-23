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

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  inputChangeHandler = (event) => {
    this.setState({
      pageTitle: event.target.value
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
        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>
        <div>
          <input type="text" onChange={this.inputChangeHandler}/>
        </div>
        <Car 
          name={cars[0].name} 
          year={cars[0].year}
          changeTitleBtn={() => this.changeTitleHandler(cars[0].name)} />
        <Car 
          name={cars[1].name} 
          year={cars[1].year}
          changeTitleBtn={() => this.changeTitleHandler(cars[1].name)} />
      </div>
    );
  }
}

export default App;
