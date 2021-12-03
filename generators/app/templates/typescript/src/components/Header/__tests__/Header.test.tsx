import { render, screen } from '@testing-library/react';

import Header from '..';

describe('Header', () => {
  it('renders', () => {
    render(<Header />);

    expect(screen.getByText('Oh, hello...')).toBeInTheDocument();
  });
});
