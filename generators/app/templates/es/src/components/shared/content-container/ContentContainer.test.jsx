import React from 'react';
import { render } from '@testing-library/react';
import ContentContainer from './ContentContainer';

describe('ContentContainer', () => {
  it('renders the child component', () => {
    const { getByText } = render(
      <ContentContainer>
        <div>Child component</div>
      </ContentContainer>
    );

    expect(getByText('Child component')).toBeInTheDocument();
  });
});
