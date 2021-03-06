import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { PaletteCreate, PaletteInfo, DynamicChildContainer } from 'pages';
import { history } from 'helper/history'
function App() {
  return (
    <div>
      <BrowserRouter history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <Route exact path="/" component={PaletteCreate} />
            <Switch>
              <Route exact path="/palette/new" component={PaletteCreate} />
              <Route exact path="/palette/:id" component={PaletteInfo} />
              <Route exact path="/tdd/dynamic-child" component={DynamicChildContainer} />
            </Switch>
          </div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
