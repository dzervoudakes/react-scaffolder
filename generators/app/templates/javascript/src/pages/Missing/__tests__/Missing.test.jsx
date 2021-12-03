import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Missing from '..';

describe('Missing', () => {
  it('renders the title and description', () => {
    render(
      <Router basename="/">
        <Routes>
          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText("That's a 404")).toBeInTheDocument();
    expect(screen.getByText('You must be lost...')).toBeInTheDocument();
  });
});
