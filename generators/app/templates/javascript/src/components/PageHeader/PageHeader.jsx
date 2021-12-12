import PropTypes from 'prop-types';
import './PageHeader.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const PageHeader = ({ title, description }) => (
  <div className="page-header">
    <h2>{title}</h2>
    <p className="t-heavy">{description}</p>
  </div>
);

PageHeader.propTypes = propTypes;

export default PageHeader;
