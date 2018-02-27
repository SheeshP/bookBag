import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Home from './Pages/Home.jsx';
import Main_Page from './Pages/Main_Page.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <div class='container-fluid'>
            <Route exact path= "/" component={Home}/>
            <Route  path= "/editor" component={Main_Page}/>
          </div>
        </header>
      </Router>
    );
  }
}

export default App;
