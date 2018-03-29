import React, { Component } from "react";

class Block extends Component {
  render() {
    return (
      <div>
        <p> {this.props.block.title} </p>
        <p> {this.props.block.date} </p>
        <p> {this.props.block.type} </p>
      </div>
    );
  }
}
export default Block;
