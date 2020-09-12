import React, { Component } from "react";

class Example extends Component {
  state = { name: "" };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * React may batch multiple setState() calls into a single update for performance.
   * Because this.props and this.state may be updated asynchronously, you should not rely on their values
   * for calculating the next state.
   *
   * // Wrong
   * this.setState({
   *    counter: this.state.counter + this.props.increment,
   * });
   *
   * To fix it, use a second form of setState() that accepts a function rather than an object. That function
   * will receive the previous state as the first argument, and the props at the time the update is applied as
   * the second argument:
   *
   * // Correct
   * this.setState((state, props) => ({
   *    counter: state.counter + props.increment
   * }));
   */
  onChange(event) {
    // Never set state directly, only thorugh function call.
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <>
        <input onChange={this.onChange} value={this.state.name} />
        <p>Hello {this.state.name}</p>
      </>
    );
  }
}

export default Example;
