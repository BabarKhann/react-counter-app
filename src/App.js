import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0
  };

  inc = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.inc}>Inc +</button>
        <button>Dec -</button>
      </div>
    );
  }
}

export default App;
