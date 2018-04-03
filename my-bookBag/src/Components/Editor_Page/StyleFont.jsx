import React, { Component } from 'react';
import Cal from './Style.css';

class StyleFont extends Component {

  render(){
    return(
      <div>
      <div class="search input-group-prepend">
        <a href="http://www.google.com" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg></a>

        <input class="searchbar" width="10px" type="text" class="form-control" placeholder="Google Search..." aria-label="" aria-describedby="basic-addon1"/>
</div>

      <div id="rcorners1">
      <h6 class="fonthead">Font Style</h6>
        <div class="line1"></div>
        <div class="row">
        <div class="col-sm-8">
        <select id="fontChanger">
          <option value="Times New Roman">Times New Roman</option>
          <option value="sans-serif">sans-serif</option>
          <option value="Calibri">Calibri</option>
          <option value="cursive">cursive</option>
          <option value="Monospace">Monospace</option>
        </select>
        </div>
        <div class="col-sm-4">

        <select id="fontSize">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        </div>
        </div>
<div class="row">
<div class="col-sm-6">

        <select id="highColor">
        <option value="Yellow">Highlight Text</option>
        <option  value="Yellow">Yellow</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        </select>
</div>
<div class="col-sm-3">

        <select id="textColor">
        <option value="Yellow">Text</option>
        <option  value="Yellow">Yellow</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        </select>
</div>
</div>



        <button id="boldBtn" type="button" className="btn btn-info" title="Bold"><b>B</b></button>
        <button id="italicBtn" type="button" className="btn btn-info" title="Italic"><em>I</em></button>
        <button id="underBtn" type="button" className="btn btn-info" title="Underline"><u>U</u></button>
        <button id="supBtn" type="button" className="btn btn-info" title="Superscript">X<sup>2</sup></button>


        <button id="subBtn" type="button" className="btn btn-info" title="Subscript">X<sub>2</sub></button>
        <button id="strikeBtn" type="button" className="btn btn-info" title="Strikethrough"><s>abc</s></button>
        <button id="olBtn" type="button" className="btn btn-info" title="Numbered list">(i)</button>
        <button id="ulBtn" type="button" className="btn btn-info" title="Unordered list">&bull;</button>




      </div>
      </div>



    );

  }
}export default StyleFont;
