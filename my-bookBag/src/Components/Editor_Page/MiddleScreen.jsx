import React, { Component } from 'react';
import Box from './Box.jsx';


class MiddleScreen extends Component {
  constructor(props){
    super(props)

    this.state={notebook:this.props.name}
  }


  render () {
    var notebooks = require('../../BookbagData/science_bag.json');
    var currentNote = null;
for(var i =0; i < notebooks.length; i++){
  if(notebooks[i].name == this.state.notebook){
    currentNote= notebooks[i];
  }
}

    return (


<div>
<div id="content">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                </ul>
            </div>
        </div>


    <h1>{currentNote.name}</h1>
    {currentNote.blocks.map(function(obj, index) {
      return <Box block={obj} />;
    })}



    </div>
</div>

);
}
}export default MiddleScreen;
