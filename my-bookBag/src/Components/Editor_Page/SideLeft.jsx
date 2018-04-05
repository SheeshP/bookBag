import React, { Component } from 'react';
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane';
import MiddleScreen from './MiddleScreen.jsx';
import './SideLeft.css';
import Cal from './Cal.jsx';
import Event from './Event.jsx';

class SideLeft extends Component {


  render () {
    let settings = {
   'mysettings.general.name': 'English',
   'mysettings.general.color-theme': 'green',
   'mysettings.general.picture': 'art',

 };
  const menu = [
   {
     title: 'General',          // Title that is displayed as text in the menu
     url: '/settings/general'  // Identifier (url-slug)
   }
  ];

    return (


      <div class="wrapper">

          <nav id="sidebar">
              <div class="sidebar-header">

              <a href="/" class="book">

                <svg className="bag" xmlns="http://www.w3.org/2000/svg" width = "35" viewBox="0 0 496 496"><path d="M96 112V23.2c0-12 4.8-23.2 16.8-23.2H168c12 0 24 11.2 24 23.2V48" fill="#5e6664"/><g fill="#2f423f"><path d="M112 0h56c12 0 24 11.2 24 23.2V48M400 112V23.2c0-12-7.2-23.2-19.2-23.2h-56c-12 0-20.8 11.2-20.8 23.2V48"/></g><path d="M80 456H55.2c-28 0-23.2-25.6-23.2-53.6v-104c0-28 21.6-49.6 50.4-49.6" fill="#ffc114"/><g fill="#fca12a"><path d="M32 367.2v34.4c0 28.8-4.8 54.4 23.2 54.4H80l1.6-138.4L32 367.2zM416 456h24.8c28 0 23.2-25.6 23.2-53.6v-104c0-28-21.6-49.6-50.4-49.6"/></g><path d="M425.6 404c0 50.4-40.8 92-91.2 92h-172c-50.4 0-91.2-41.6-91.2-92l18.4-264.8C88.8 88.8 129.6 48 180 48h135.2c50.4 0 91.2 40.8 91.2 91.2L425.6 404z" fill="#f15249"/><path d="M384 372c0 37.6-30.4 68-68 68H188c-37.6 0-68-30.4-68-68s30.4-68 68-68h128c37.6 0 68 30.4 68 68z" fill="#45c2b3"/><path d="M407.2 139.2C407.2 88 366.4 48 316 48h-68v257.6L187.2 448l59.2 48h87.2c50.4 0 91.2-41.6 91.2-92l-17.6-264.8z" fill="#c93131"/><path d="M380 376c0 38.4-31.2 72-69.6 72H185.6c-38.4 0-69.6-33.6-69.6-72s-5.6-72 32.8-72h198.4c37.6 0 32.8 33.6 32.8 72z" fill="#3cc676"/><path d="M248 304h98.4c38.4 0 32.8 33.6 32.8 72s-31.2 72-69.6 72H184" fill="#0aa06e"/><path d="M263.2 255.2c-8 8-21.6 8-30.4 0l-45.6-45.6c-8-8-8-21.6 0-30.4l45.6-45.6c8-8 21.6-8 30.4 0l45.6 45.6c8 8 8 21.6 0 30.4l-45.6 45.6z" fill="#c93131"/><path d="M260.8 236.8c-7.2 7.2-18.4 7.2-25.6 0L196 197.6c-7.2-7.2-7.2-18.4 0-25.6l39.2-39.2c7.2-7.2 18.4-7.2 25.6 0L300 172c7.2 7.2 7.2 18.4 0 25.6l-39.2 39.2z" fill="#ffc114"/><path d="M247.2 128c4.8 0 9.6 1.6 13.6 5.6l39.2 39.2c7.2 7.2 7.2 18.4 0 25.6l-39.2 39.2c-3.2 3.2-8 5.6-12.8 5.6" fill="#ff8a15"/><g fill="#2f423f"><path d="M240 199.2c0 2.4-4.8 4.8-8 4.8s-8-2.4-8-4.8v-28c0-2.4 4.8-4.8 8-4.8s8 2.4 8 4.8v28zM272 199.2c0 2.4-4.8 4.8-8 4.8s-8-2.4-8-4.8v-28c0-2.4 4.8-4.8 8-4.8s8 2.4 8 4.8v28z"/></g></svg>

              </a>
                  <h3 class="headbook">Science BookBag</h3>
              </div>
              <ul class="list-unstyled components">
                  <li class="active">
                      <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Chemistry</a>
                      <ul class="collapse list-unstyled" id="homeSubmenu">
                          <li><a href="#">- Organic Notes</a></li>
                          <li><a href="#">- Reaction Notes</a></li>
                          <li><a href="#">- Lab Notes</a></li>
                      </ul>
                  </li>
                  <li>
                    <a href="#coscSubmenu" data-toggle="collapse" aria-expanded="false">Computer Science</a>
                    <ul class="collapse list-unstyled" id="coscSubmenu">
                      <li><a href="#">- Software Notes</a></li>
                      <li><a href="#">- Data Structure Notes</a></li>
                      <li><a href="#">- Machine Learning Textbook</a></li>

                    </ul>
                      <a href="#bioSubmenu" data-toggle="collapse" aria-expanded="false">Biology</a>
                      <ul class="collapse list-unstyled" id="bioSubmenu">
                          <li><a href="#">- Anatomy Notes</a></li>
                          <li><a href="#">- Ecosystem Notes</a></li>
                          <li><a href="#">- Biology Textbook</a></li>
                      </ul>
                  </li>
                  <li>
                    <a href="#econSubmenu" data-toggle="collapse" aria-expanded="false">Economics</a>
                    <ul class="collapse list-unstyled" id="econSubmenu">
                        <li><a href="#">- Macroeconomic Notes</a></li>
                        <li><a href="#">- Microeconomic Notes</a></li>
                        <li><a href="#">- Biology Textbook</a></li>
                    </ul>
                  </li>
                  <li>
                  <a className="notebook" href="#" data-toggle="modal" data-target="#noteModal" >New Notebook
                  </a>


                    <div class="modal fade" id="noteModal" tabindex="-1" role="dialog" aria-labelledby="noteModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="noteModalLabel">New Notebook:</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                        <div class="modal-body">

                          <SettingsPane items={menu} index="/settings/general" >
                              <SettingsPage handler="/settings/general">
                                <fieldset className="form-group">
                                  <label for="profileName">Notebook Name: </label>
                                    <input type="text" className="form-control"  placeholder="Name"   />
                                </fieldset>
                                  <fieldset className="form-group">
                                    <label for="profileColor">Add Intital Number Notes: </label>
                                      <select  className="form-control" >
                                        <option value="blue">1</option>
                                        <option value="green">2</option>
                                        <option value="red">3</option>
                                        <option value="grey">3</option>
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

                  </li>
              </ul>

              <Cal/>
              <Event/>
          </nav>
          <div>
          <MiddleScreen/>
          </div>
          </div>



    );
  }
  myClick(){
    alert("Created New Notebook!");
  }
}export default SideLeft;
