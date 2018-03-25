import React, { Component } from "react";
import "./Notebook.css";

class Notebook extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="btn btn-default btn-circle btn-lg">
            {this.props.name}
          </button>
        </div>
      </div>
    );
  }
}
export default Notebook;
