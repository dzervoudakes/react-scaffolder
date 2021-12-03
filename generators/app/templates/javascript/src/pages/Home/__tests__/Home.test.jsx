import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '..';

describe('Home', () => {
  it('renders the title and description', () => {
    render(
      <Router basename="/">
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText('Welcome to your new React App!')).toBeInTheDocument();
    expect(screen.getByText('Made with ❤️')).toBeInTheDocument();
  });
});
