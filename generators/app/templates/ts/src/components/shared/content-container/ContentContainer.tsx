import * as React from 'react';
import './ContentContainer.scss';

interface PropTypes {
  children: JSX.Element[];
}

const ContentContainer: React.FC = ({ children }: PropTypes) => (
  <div className="content-container">{children}</div>
);

export default ContentContainer;
