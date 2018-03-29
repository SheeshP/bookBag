import React, {Component} from 'react';
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane';


class Settings extends Component{
  render(){

    let settings = {
   'mysettings.general.name': 'Green Team',
   'mysettings.general.color-theme': 'grey',
   'mysettings.general.email': 'GreenTeam@me.com',
   'mysettings.general.password': '*********',
   'mysettings.general.picture': 'male',
   'mysettings.profile.firstname': 'Green',
   'mysettings.profile.lastname': 'Team',
 };


 const menu = [
   {
     title: 'General',          // Title that is displayed as text in the menu
     url: '/settings/general'  // Identifier (url-slug)
   }
 ];

return(
  <div>
  <div className="buttonmove">
      <button type="submit" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">
        Edit Settings
      </button>
  </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Settings</h5>
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
                        <option value="red">Red</option>
                        <option value="grey">Grey</option>
                        <option value="yellow">Yellow</option>
                      </select>
                      <label for="profileAvatar">Profile Avatar: </label>
                        <select name="mysettings.general.picture" id="profileAvatar" className="form-control" defaultValue={settings['mysettings.general.picture']}>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        <label for="email">Email: </label>
                        <input type="text" className="form-control" name="mysettings.general.email" placeholder="Email" id="general.email" defaultValue={settings['mysettings.general.email']} />
                        <label for="password">Password: </label>
                        <input type="text" className="form-control" name="mysettings.general.password" placeholder="Password" id="general.password" defaultValue={settings['mysettings.general.password']} />
                  </fieldset>
                </SettingsPage>
          </SettingsPane>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-info" onClick={this.myClick}>Save changes</button>
        </div>
      </div>
    </div>
    </div>
  </div>
)
}
myClick(){
  alert("Changes Saved!");
}

}
export default Settings;
