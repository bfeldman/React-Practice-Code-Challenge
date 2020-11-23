import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    api: [],
    moneyInWallet: 200,
    platesEaten: [],
    lastPlateIndex: 0
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      this.setState({api: sushi})
    })
  }
  
  handleSushiEat = (sushiObj) => {
    if (!this.state.platesEaten.includes(sushiObj) && this.state.moneyInWallet >= sushiObj.price) {
      this.setState({
        platesEaten: this.state.platesEaten.concat(sushiObj),
        moneyInWallet: this.state.moneyInWallet - sushiObj.price
      })
    }
  }
  
  handleMoreButtonClick = () => {
    this.setState({lastPlateIndex: this.state.lastPlateIndex + 4})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          api={this.state.api}
          handleMore={this.handleMoreButtonClick}
          lastPlateIndex={this.state.lastPlateIndex} 
          handleSushiEat={this.handleSushiEat}
          platesEaten={this.state.platesEaten}
        />
        <Table
          moneyInWallet={this.state.moneyInWallet}
          platesEaten={this.state.platesEaten}
        />
      </div>
    );
  }
}

export default App;