import PropTypes from 'prop-types';
import './Layout.scss';

const propTypes = {
  children: PropTypes.node.isRequired
};

const Layout = ({ children }) => <div className="layout">{children}</div>;

Layout.propTypes = propTypes;

export default Layout;
