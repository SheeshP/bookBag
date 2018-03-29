import React, { Component } from "react";
import "./NotebookButton.css";

class NotebookButton extends Component {
  render() {
    var blocks = this.props.notebook.blocks;
    var block_arr = [];
    for (var i = 0; i < blocks.length; i++) {
      block_arr.push(blocks[i].title);
    }
    return (
      <li>
        <div className="btn-group">
          <button className="btn btn-secondary" onClick={this.props.handler}>
            {" "}
            {this.props.notebook.name}{" "}
          </button>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Go To
            </button>
            <div class="dropdown-menu">
              {block_arr.map(function(title, index) {
                return (
                  <a className="dropdown-item" href="#!">
                    {" "}
                    {title}{" "}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default NotebookButton;
