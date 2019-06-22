import React, { Component } from 'react';
import AppTemplate from './AppTemplate';
import Palettes from './palette/Palettes';

class App extends Component {
  render() {
    return (
      <AppTemplate  //왜 AppTemplate에 감싸는지?
        palettes={<Palettes />}
      />
    );
  }
}

export default App;
