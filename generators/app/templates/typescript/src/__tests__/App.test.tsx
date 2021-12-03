import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';

describe('App', () => {
  it('renders the header page title and footer github link', () => {
    render(
      <Router basename="/">
        <App />
      </Router>
    );

    expect(screen.getByText('Oh, hello...')).toBeInTheDocument();
    expect(screen.getByText('Welcome to your new React App!')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
