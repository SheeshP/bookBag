import React, { Component } from 'react';


class Box extends Component {
constructor(props){
  super(props)
}


  render () {
    var rand = Math.random()

    return (
<div>

<button class="btn btn-default btn-toggle" type="button" data-toggle="collapse"
   data-target={"#"+rand} aria-expanded="false" aria-controls="collapseDataTargetExample">
</button>
<label>{this.props.block.title}</label>
<div class="collapse" id={rand}>
 <div class="well">
<p>{this.props.block.content}</p>
  </div>
</div>
</div>
    );
  }
}export default Box;
