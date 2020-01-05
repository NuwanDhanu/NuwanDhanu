import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 30,
    fontWeigt: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <span
          style={{ fontSize: 50, fontWeight: "bold" }}
          className="badge badge-primary m-2"
        >
          {this.formatCout()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCout() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
