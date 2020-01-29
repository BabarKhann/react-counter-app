import React, { Component } from "react";

import Stats from "./components/Stats";

class App extends Component {
  state = {
    counter: 0
  };

  inc = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  dec = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <Stats counter={this.state.counter} />
        <button onClick={this.inc}>Inc +</button>
        <button onClick={this.dec}>Dec -</button>
      </div>
    );
  }
}

export default App;
