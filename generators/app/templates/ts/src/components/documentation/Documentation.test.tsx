import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import Documentation from './Documentation';

jest.mock('../../../README.md', () => {
  const Readme: React.FC = () => <div>Readme</div>;
  return Readme;
});

describe('Documentation', () => {
  it('renders the Readme', () => {
    const { getByText } = render(
      <Router basename="/">
        <Switch>
          <Documentation />
        </Switch>
      </Router>
    );

    expect(getByText('Readme')).toBeInTheDocument();
  });
});
