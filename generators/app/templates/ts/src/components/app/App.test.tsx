import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the header page title and footer github link', () => {
    const { getByText } = render(
      <Router basename="/">
        <App />
      </Router>
    );

    expect(getByText('Oh, hello...')).toBeInTheDocument();
    expect(getByText('GitHub')).toBeInTheDocument();
  });
});
