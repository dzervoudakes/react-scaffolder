import * as React from 'react';
import './SectionHeader.scss';

interface PropTypes {
  title: string;
  description: string;
}

const SectionHeader: React.FC<PropTypes> = ({ title, description }: PropTypes) => (
  <div className="section-header">
    <h2>{title}</h2>
    <p className="t-heavy">{description}</p>
  </div>
);

export default SectionHeader;
