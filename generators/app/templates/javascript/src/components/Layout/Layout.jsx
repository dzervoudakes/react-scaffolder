import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

const propTypes = {
  children: PropTypes.node.isRequired
};

const Layout = ({ children }) => <main className="layout">{children}</main>;

Layout.propTypes = propTypes;

export default Layout;
