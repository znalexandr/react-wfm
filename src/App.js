import React, { Component } from 'react';
import './App.scss';
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

  

  handleShowCar = () => {
    this.setState({showCar: !this.state.showCar})
  }

  deleteItemHandler(index) {

    let cars = this.state.cars.concat();
    cars.splice(index, 1)

    this.setState({
      cars
    }) 
  }

  changeItemNameHandler(index, event) {
    let cars = this.state.cars.concat();
    cars[index].name = event.target.value;
    this.setState({
      cars
    }) 
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
            changeItemName={(event) => this.changeItemNameHandler(index, event)}
            deleteItem={this.deleteItemHandler.bind(this, index)}
            />
        )
      })
    }

    return (
      <div className="App" style={styleWrap}>
        <h1>{this.state.pageTitle}</h1>
        <button 
          className={'btn'}
          onClick={this.handleShowCar}
          >Toggle Cars</button>
        {cars}
      </div>
    );
  }
}

export default App;
