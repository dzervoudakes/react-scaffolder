import * as React from 'react';
import { render } from '@testing-library/react';
import ContentContainer from './ContentContainer';

describe('ContentContainer', () => {
  const Component: React.FC = () => (
    <ContentContainer>
      <div>Child component</div>
    </ContentContainer>
  );

  it('renders the child component', () => {
    const { getByText } = render(<Component />);

    expect(getByText('Child component')).toBeInTheDocument();
  });
});
