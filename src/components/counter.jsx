import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className={this.getDecrementClasses()}>
          -
        </button>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-m m-2">
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-m m-2">
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getDecrementClasses() {
    let classes = "btn btn-m m-2 btn-";
    classes += this.props.counter.value === 0 ? "secondary" : "danger";
    return classes;
  }

  formatValue() {
    return this.props.counter.value === 0 ? (
      <span style={{ fontSize: 20 }}>0</span>
    ) : (
      <span style={{ fontSize: 20 }}>{this.props.counter.value}</span>
    );
  }
}

export default Counter;
