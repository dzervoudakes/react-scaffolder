import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Missing from '@src/components/missing';
import routes from '@src/routes/app-routes';
import Header from './header';
import Footer from './footer';

const App: React.FC = () => (
  <>
    <Header />
    <Switch>
      {routes.map((route) => (
        <Route exact key={route.path} {...route} />
      ))}
      <Route component={Missing} />
    </Switch>
    <Footer />
  </>
);

export default hot(App);
