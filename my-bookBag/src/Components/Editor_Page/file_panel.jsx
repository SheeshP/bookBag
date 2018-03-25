import React, { Component } from "react";
import NotebookButton from "./NotebookButton.jsx";

class FilePanel extends Component {
  render() {
    var notebooks = require("./../../BookbagData/science_bag.json"); //Takes in a bookbag json. We have to make it so it takes in the one related to what page we are on

    return (
      <div class="container">
        <div class="row">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h5>Bookbag Name Goes Here</h5>
              <button onClick={this.props.handler} />
            </div>
          </div>
        </div>
        <ul>
          {notebooks.map(function(obj, index) {
            return <NotebookButton notebook={obj} />;
          })}
        </ul>
      </div>
    );
  }
}
export default FilePanel;
