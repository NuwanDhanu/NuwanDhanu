import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageurl: "https://picsum.photos/200"
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageurl} alt="" />
        <span>{this.formatCout()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCout() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
