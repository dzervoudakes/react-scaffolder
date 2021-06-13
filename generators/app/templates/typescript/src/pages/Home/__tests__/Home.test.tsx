import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from '..';

describe('Home', () => {
  it('renders the title and description', () => {
    render(
      <Router basename="/">
        <Switch>
          <Home />
        </Switch>
      </Router>
    );

    expect(screen.getByText('Welcome to your new React App!')).toBeInTheDocument();
    expect(screen.getByText('Made with ❤️')).toBeInTheDocument();
  });
});
