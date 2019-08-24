import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  const Component: React.FC = () => (
    <Router basename="/">
      <App />
    </Router>
  );

  it('renders the header page title and footer github link', () => {
    const { getByText } = render(<Component />);

    expect(getByText('Oh, hello...')).toBeInTheDocument();
    expect(getByText('GitHub')).toBeInTheDocument();
  });
});
