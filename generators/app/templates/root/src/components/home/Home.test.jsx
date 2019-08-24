import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  const Component = () => (
    <Router basename="/">
      <Switch>
        <Home />
      </Switch>
    </Router>
  );

  it('renders the title and description', () => {
    const { getByText } = render(<Component />);

    expect(getByText('Welcome to your new React App!')).toBeVisible();
    expect(getByText('Made with ❤️.')).toBeVisible();
  });
});
