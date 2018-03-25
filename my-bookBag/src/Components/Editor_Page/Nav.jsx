import React, { Component } from "react";
import FilePanel from "./file_panel";
import Notebook from "./Notebook";

import "./RightSide.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      currentNotebook: "1"
    };
  }

  handler(e) {
    e.preventDefault();
    this.setState({
      currentNotebook: "2"
    });
  }

  render() {
    return (
      <body>
        <div class="Container">
          <div class="Left">
            <FilePanel handler={this.handler} />
          </div>

          <div class="Middle">
            <p> {this.state.currentNotebook} </p>
            <Notebook />
          </div>
          <div class="Right">Right Content</div>
        </div>
      </body>
    );
  }
}
export default Nav;
