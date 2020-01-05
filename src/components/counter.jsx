import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.generateBadgeClass()}>{this.formatCout()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags</p>;

    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
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
