import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Palettes, Create } from 'pages';
import { history } from 'helper/history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path='/' component={Palettes} />
          <Route exact path='/create' component={Create} />
        </div>
      </Router>
    );
  }
}

export default App;
