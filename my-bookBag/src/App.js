import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Home from './Pages/Home.jsx';
import Editor from './Pages/Editor.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <div>
            <Route exact path= "/" component={Home}/>
            <Route  path= "/editor" component={Editor}/>

            </div>
        </header>
      </Router>
    );
  }
}

export default App;
