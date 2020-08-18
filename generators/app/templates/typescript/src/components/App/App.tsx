import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@src/components/Home';
import Missing from '@src/components/Missing';
import Header from './Header';
import Footer from './Footer';

const App: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Missing} />
    </Switch>
    <Footer />
  </>
);

export default App;
