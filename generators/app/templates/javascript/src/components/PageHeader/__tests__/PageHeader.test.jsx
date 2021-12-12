import { render, screen } from '@testing-library/react';

import PageHeader from '..';

describe('PageHeader', () => {
  const props = {
    title: 'Foo',
    description: 'Bar'
  };

  it('renders the title and description', () => {
    render(<PageHeader {...props} />);

    expect(screen.getByText('Foo')).toBeInTheDocument();
    expect(screen.getByText('Bar')).toBeInTheDocument();
  });
});
