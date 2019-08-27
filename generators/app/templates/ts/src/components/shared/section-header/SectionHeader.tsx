import * as React from 'react';
import './SectionHeader.scss';

interface Props {
  title: string;
  description: string;
}

const SectionHeader: React.FC<Props> = ({ title, description }) => (
  <div className="section-header">
    <h2>{title}</h2>
    <p className="t-heavy">{description}</p>
  </div>
);

export default SectionHeader;
