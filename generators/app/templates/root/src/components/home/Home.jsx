import React from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '@shared/content-container';
import SectionHeader from '@shared/section-header';

const Home = () => (
	<ContentContainer>
		<SectionHeader title="Welcome to your new React App!" description="Made with ❤️." />
		<p>
			<Link to="/documentation">Click here</Link> to view the build instructions.
		</p>
	</ContentContainer>
);

export default Home;
