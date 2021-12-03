import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Routes from '..';

describe('Routes', () => {
  it('renders home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText('Welcome to your new React App!')).toBeInTheDocument();
  });

  it('renders the 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/missing']}>
        <Routes />
      </MemoryRouter>
    );

    expect(screen.getByText("That's a 404")).toBeInTheDocument();
  });
});
