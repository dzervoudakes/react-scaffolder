import { render, screen } from '@testing-library/react';

import Layout from '..';

describe('Layout', () => {
  it('renders the child component', () => {
    render(
      <Layout>
        <div>Child component</div>
      </Layout>
    );

    expect(screen.getByText('Child component')).toBeInTheDocument();
  });
});
