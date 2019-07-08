import React from 'react';
import { Route } from 'react-router-dom';
import { PaletteCreate } from 'pages';

function App() {
  return (
    <div>
      <Route exact path="/" component={PaletteCreate} />
      <Route exact path="/palette/new" component={PaletteCreate} />
    </div>
  );
}

export default App;
