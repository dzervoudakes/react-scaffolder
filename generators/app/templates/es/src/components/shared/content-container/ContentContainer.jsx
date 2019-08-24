import React from 'react';
import PropTypes from 'prop-types';
import './ContentContainer.scss';

const propTypes = {
  children: PropTypes.node.isRequired
};

const ContentContainer = ({ children }) => (
  <div className="content-container">{children}</div>
);

ContentContainer.propTypes = propTypes;

export default ContentContainer;
