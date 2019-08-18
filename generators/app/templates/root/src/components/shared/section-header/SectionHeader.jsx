import React from 'react';
import PropTypes from 'prop-types';
import './SectionHeader.scss';

const propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

const SectionHeader = ({ title, description }) => (
	<div className="section-header">
		<h2>{title}</h2>
		<p className="t-heavy">{description}</p>
	</div>
);

SectionHeader.propTypes = propTypes;

export default SectionHeader;
