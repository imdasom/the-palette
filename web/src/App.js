import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { PaletteCreate, PaletteInfo } from 'pages';
import { history } from 'helper/history'
function App() {
  return (
    <div>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <Route exact path="/" component={PaletteCreate} />
            <Switch>
              <Route exact path="/palette/new" component={PaletteCreate} />
              <Route exact path="/palette/:id" component={PaletteInfo} />
            </Switch>
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
