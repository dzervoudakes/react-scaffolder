import React from 'react';
import { render } from '@testing-library/react';
import ContentContainer from './ContentContainer';

describe('ContentContainer', () => {
	const Component = () => (
		<ContentContainer>
			<div>Child component</div>
		</ContentContainer>
	);

	it('renders the child component', () => {
		const { getByText } = render(<Component />);

		expect(getByText('Child component')).toBeVisible();
	});
});
