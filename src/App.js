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

    return (
      <div className="App" style={styleWrap}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>
        <div>
          <input type="text" onChange={this.inputChangeHandler}/>
        </div>
        {this.state.cars.map((car, index) => {
          return (
            <Car 
              key={index}
              name={car.name}
              year={car.year}
              changeTitleBtn={() => this.changeTitleHandler(car.name)}
              />
          )
        })}
      </div>
    );
  }
}

export default App;
