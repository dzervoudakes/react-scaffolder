import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import Documentation from './Documentation';

jest.mock('../../../README.md', () => {
  const Readme = () => <div>Readme</div>;
  return Readme;
});

describe('Documentation', () => {
  const Component = () => (
    <Router basename="/">
      <Switch>
        <Documentation />
      </Switch>
    </Router>
  );

  it('renders the Readme', () => {
    const { getByText } = render(<Component />);

    expect(getByText('Readme')).toBeVisible();
  });
});
