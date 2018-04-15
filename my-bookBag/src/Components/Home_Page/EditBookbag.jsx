import React, {Component} from 'react';
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane';
import './EditBook.css';


class EditBookbag extends Component{

  render(){

    let bagsettings = {
   'mysettings.general.name': 'English',
   'mysettings.general.color-theme': 'green',
   'mysettings.general.picture': 'art',

 };
  const menu = [
   {
     title: 'Bag',          // Title that is displayed as text in the menu
     url: '/bagsettings/bag'  // Identifier (url-slug)
   }
  ];

    return(

      <div>
      <div >
          <button type="submit" class="btn btn-info" data-toggle="modal" data-target="#examModal">
            Edit Settings
          </button>
      </div>
        <div class="modal fade" id="examModal" tabindex="-1" role="dialog" aria-labelledby="examModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="examModalLabel">Edit BookBag:</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="modal-body">

              <SettingsPane items={menu} index="/bagsettings/bag" settings={bagsettings}>
                  <SettingsPage handler="/bagsettings/bag">
                    <fieldset className="form-group">
                      <label for="profileName">Bag Name: </label>
                        <input type="text" className="form-control"  placeholder="Bookbag Name"   />
                    </fieldset>
                      <fieldset className="form-group">
                        <label for="profileColor">Color-Theme: </label>
                          <select name="mysettings.general.color-theme" id="profileColor" className="form-control" defaultValue={bagsettings['mysettings.general.color-theme']}>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                            <option value="grey">Grey</option>
                            <option value="yellow">Yellow</option>
                          </select>
<label for="bagPic">Upload Bag Image: </label>
                          <input type="file" className="form-control" placeholder="Bookbag image"/>

                            </fieldset>
                    </SettingsPage>
              </SettingsPane>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.cancelClick}>Cancel</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={this.deleteClick}>Delete</button>
              <button type="button" class="btn btn-info" onClick={this.myClick}>Save</button>
            </div>
          </div>
        </div>
        </div>
      </div>

    );
  }
  myClick(){
    alert("Saved Bag!");
  }

deleteClick(){
  alert("Deleted Bag!");
}

  cancelClick(){
    alert("Canceled!");
  }
  }
  export default EditBookbag;
