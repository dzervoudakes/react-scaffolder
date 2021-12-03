import { render, screen } from '@testing-library/react';

import Footer from '..';

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />);

    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });
});
