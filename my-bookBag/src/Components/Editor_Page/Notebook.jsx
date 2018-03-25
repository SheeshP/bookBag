import React, { Component } from "react";
import Block from "./Block.jsx";
import "./Notebook.css";

class Notebook extends Component {
  render() {
    var bookbag_json = require("./../../BookbagData/science_bag.json");
    var blocks = []; //get an array of blocks from the notebook information
    for (var i = 0; i < bookbag_json.length; i++) {
      if (bookbag_json[i].name == this.props.name) {
        blocks = bookbag_json[i].blocks;
      }
    }

    return (
      <div>
        <h1> {this.props.name} </h1>
        <div>
          <ul>
            {blocks.map(function(obj, index) {
              return <Block block={obj} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Notebook;
