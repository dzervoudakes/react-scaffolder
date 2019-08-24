import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import Missing from './Missing';

describe('Missing', () => {
  const Component: React.FC = () => (
    <Router basename="/">
      <Switch>
        <Missing />
      </Switch>
    </Router>
  );

  it('renders the title and description', () => {
    const { getByText } = render(<Component />);

    expect(getByText("That's a 404")).toBeInTheDocument();
    expect(getByText('You must be lost...')).toBeInTheDocument();
  });
});
