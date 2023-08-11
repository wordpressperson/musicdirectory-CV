import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layouts/NavBar.js';
import Index from './components/layouts/Index.js';
import {Provider} from './context.js'
import Lyrics from './components/tracks/Lyrics.js';

import './App.css';

class App extends Component {

render() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  )
}
}

export default App;
