import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const Component = () => (
    <Router basename="/">
      <App />
    </Router>
  );

  it('renders the header page title and footer github link', () => {
    const { getByText } = render(<Component />);

    expect(getByText('Oh, hello...')).toBeVisible();
    expect(getByText('GitHub')).toBeVisible();
  });
});
