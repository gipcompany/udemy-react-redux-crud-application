import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.handlePlusButton2 = this.handlePlusButton2.bind(this)
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handlePlusButton2() {
    this.setState({ count: this.state.count + 1 })
  }

  handlePlusButton3() {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handlePlusButton2}>+1</button>
        <button onClick={() => {this.handlePlusButton3()}}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
