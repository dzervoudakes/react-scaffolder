import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Home from '@src/components/home';
import Missing from '@src/components/missing';
import Header from './header';
import Footer from './footer';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Missing} />
    </Switch>
    <Footer />
  </>
);

export default hot(App);
