import React, {Component} from 'react';
import './earth.jpg';
import './lips.jpg';
import './Books.css';
import NewBookClick from './NewBookClick.jsx';
import bagSettings from './bagSettings.jsx'
import EditBookbag from './EditBookbag.jsx';

class Books extends Component{

render(){
    return(

      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 text-white bg-light box-shadow">
                <div class="boxsize container">
                <h5 className="add">Click the plus to add a new BookBag</h5>
                  <NewBookClick/>
                </div>
                <div class="card-body bg-secondary">
                  <p class="card-text-add"> <strong>New BookBag</strong> </p>
                  <div class="d-flex justify-content-between align-items-center">

                    <small class="text-muted">03/21/1996</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div className="w card mb-4 bg-warning text-white box-shadow" >
                <img className="earth card-img-top" src={require('./earth.jpg')}></img>
                <div class="card-body">
                  <a className="science" href="/editor" ><strong> Science </strong>
                    <span className="tooltiptext">Click to navigate into this bookbag</span>
                  </a>
                  <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <EditBookbag/>
                  </div>
                    <small class="text-muted">March 13, 2018</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-4 bg-danger text-white box-shadow">
                <img class="math card-img-top" src={require('./lips.jpg')}></img>
                <div class="card-body">
                <a className="math2" href="/editor" ><strong> Music </strong>
                  <span className="tooltiptext">Click to navigate into this bookbag</span>
                </a>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-info">Edit BookBag</button>
                    </div>
                    <small class="text-muted">August 27, 2016</small>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
    );
    }

}
export default Books;
