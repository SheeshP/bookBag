import React, { Component } from "react";

import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane';

class Note extends Component {
  render() {
    const menu = [
      {
        title: 'General',          // Title that is displayed as text in the menu
        url: '/settings/general'  // Identifier (url-slug)
      }
    ];

    return (
      <div>
      <a href="#" data-toggle="modal" data-target="#caModal" >New Note

      </a>


        <div class="modal fade" id="caModal" tabindex="-1" role="dialog" aria-labelledby="caModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="caModalLabel">New Note:</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="modal-body">

              <SettingsPane items={menu} index="/settings/general" >
                  <SettingsPage handler="/settings/general">
                    <fieldset className="form-group">
                      <label for="profileName">Add a new note title: </label>
                        <input type="text" className="form-control"  placeholder="Name"   />
                    </fieldset>
                    <fieldset className="form-group">
                      <label for="profileColor">Note Type: </label>
                        <select  id="profileColor" className="form-control" >
                          <option value="blue">Image</option>
                          <option value="red">Code</option>
                          <option value="grey">Text</option>
                          <option value="yellow">Graph</option>
                          <option value="g">Formula</option>
                        </select>
</fieldset>
                    </SettingsPage>
              </SettingsPane>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.cancelClick}>Cancel</button>
              <button type="button" class="btn btn-info" onClick={this.myClick}>Create</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
  myClick(){
    alert("Created a new note!");
  }
}

export default Note;
