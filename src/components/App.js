import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Palettes, Create } from 'pages';
import AppTemplate from './AppTemplate';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Palettes} />
        <Route exact path='/create' component={Create} />
      </div>
    );
  }
}

export default App;
