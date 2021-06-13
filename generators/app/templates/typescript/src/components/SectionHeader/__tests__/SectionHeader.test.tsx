import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionHeader from '..';

describe('SectionHeader', () => {
  const props = {
    title: 'Foo',
    description: 'Bar'
  };

  it('renders the title and description', () => {
    render(<SectionHeader {...props} />);

    expect(screen.getByText('Foo')).toBeInTheDocument();
    expect(screen.getByText('Bar')).toBeInTheDocument();
  });
});
