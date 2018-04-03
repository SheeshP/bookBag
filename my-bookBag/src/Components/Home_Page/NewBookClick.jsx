import React, {Component} from 'react';
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane';
import './NewBookClick.css';

class NewBookClick extends Component{
  render(){

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

    return(

      <div>
      <div>
       <a className="lin" href="#" data-toggle="modal" data-target="#exampleModal" >
       <svg class="plus" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 50 50"><circle cx="25" cy="25" r="25" fill="#43b05c"/><path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M25 13v25M37.5 25h-25"/></svg>
      </a>

      </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Create New BookBag:</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="modal-body">

              <SettingsPane items={menu} index="/settings/general" settings={settings}>
                  <SettingsPage handler="/settings/general">
                    <fieldset className="form-group">
                      <label for="profileName">Name: </label>
                        <input type="text" className="form-control" name="mysettings.general.name" placeholder="Name" id="general.name" defaultValue={settings['mysettings.general.name']} />
                    </fieldset>
                      <fieldset className="form-group">
                        <label for="profileColor">Color-Theme: </label>
                          <select name="mysettings.general.color-theme" id="profileColor" className="form-control" defaultValue={settings['mysettings.general.color-theme']}>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                            <option value="grey">Grey</option>
                            <option value="yellow">Yellow</option>
                          </select>
                          <label for="profileAvatar">Image: </label>
                            <input type="file" className="form-control" placeholder="Bookbag image"/>

                            
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
    alert("Created New Bag!");
  }
  cancelClick(){
    alert("Canceled!");
  }
}
export default NewBookClick;
