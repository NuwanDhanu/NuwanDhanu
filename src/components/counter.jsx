import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.generateBadgeClass()}>{this.formatCout()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>{this.state.tags.length === 0 && "Please enter value to Tag"}</ul>
      </React.Fragment>
    );
  }

  handleIncrement() {
    console.log("button click");
  }

  generateBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCout() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
