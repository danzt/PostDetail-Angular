import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Weather } from './pages/Weather';
import { Favorite } from './pages/Favorites';
import { Header } from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/weathers" component={Weather} />
        <Route exact path="/">
          <Redirect to="/weathers" />
        </Route>
        <Route exact path="/Favorite" component={Favorite} />
      </Switch>
    </div>
  );
};
