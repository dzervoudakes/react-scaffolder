import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@src/pages/Home';
import Missing from '@src/pages/Missing';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={Missing} />
  </Switch>
);

export default Routes;
