import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Toyota Sprinter', year: '1988'},
      {name: 'Hyundai Elantra', year: '2007'},
    ],
    pageTitle: 'React Component',
    showCar: false
  }

  changeTitleHandler = (pageTitle) => {
    this.setState({
      pageTitle
    })
  }

  handleShowCar = () => {
    this.setState({showCar: !this.state.showCar})
  }


  render() {

    const styleWrap = {
      textAlign: 'center'
    }

    let cars = null;

    if(this.state.showCar) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car 
            key={index}
            name={car.name}
            year={car.year}
            changeTitleBtn={() => this.changeTitleHandler(car.name)}
            />
        )
      })
    }

    return (
      <div className="App" style={styleWrap}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.handleShowCar}>Toggle Cars</button>
        {cars}
      </div>
    );
  }
}

export default App;
