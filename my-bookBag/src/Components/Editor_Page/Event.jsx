import React, { Component } from "react";
import "./Event.css";
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane';

class Event extends Component {
  render() {
    const menu = [
      {
        title: 'General',          // Title that is displayed as text in the menu
        url: '/settings/general'  // Identifier (url-slug)
      }
    ];

    return (
      <div>
      <a href="#" data-toggle="modal" data-target="#calModal" ><svg id='Capa_6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
    <circle cx='25' cy='25' r='25' fill='#43b05c' />
    <line x1='25' y1='13' x2='25' y2='38' fill='none' stroke='#fff' strokeWidth='2'
    strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' />
    <line x1='37.5' y1='25' x2='12.5' y2='25' fill='none' stroke='#fff' strokeWidth='2'
    strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' />
</svg>
      </a>


        <div class="modal fade" id="calModal" tabindex="-1" role="dialog" aria-labelledby="calModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="calModalLabel">New Calendar Event:</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="modal-body">

              <SettingsPane items={menu} index="/settings/general" >
                  <SettingsPage handler="/settings/general">
                    <fieldset className="form-group">
                      <label for="profileName">Select a date then add an event: </label>
                        <input type="text" className="form-control"  placeholder="Event Details"   />
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
    alert("Created New Event!");
  }
}

export default Event;
