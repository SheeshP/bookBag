import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
constructor(props){
  super(props)
}


  render () {
    var rand = Math.random()
    let content = null;
    if(this.props.block.type == "Image"){
      console.log(this.props.block.content);
    content = <img src={require("../../"+this.props.block.content)} className="img-responsive" />
  }else{
    content = <p>{this.props.block.content} </p>
  }

    return (
<div>
<button id="co" class="btn btn-default btn-toggle" type="button" data-toggle="collapse"
   data-target={"#"+rand} aria-expanded="false" aria-controls="collapseDataTargetExample">+
</button>
<label>{this.props.block.title}</label>
<div class="collapse" id={rand}>
 <div class="well">
 {content}
  </div>
</div>
  <div class="line"></div>
</div>

    );
  }
}export default Box;
