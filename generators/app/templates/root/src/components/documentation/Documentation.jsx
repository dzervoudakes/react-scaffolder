import React from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '@shared/content-container';
import Readme from '../../../README.md';
import './Documentation.scss';

const Documentation = () => (
	<ContentContainer>
		<p>
			<Link to="/">
				<span>&lt;</span> Go Back
			</Link>
		</p>
		<div className="readme-container">
			<Readme />
		</div>
	</ContentContainer>
);

export default Documentation;
