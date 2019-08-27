import * as React from 'react';
import './ContentContainer.scss';

interface Props {
  children: JSX.Element[];
}

const ContentContainer: React.FC<Props> = ({ children }) => (
  <div className="content-container">{children}</div>
);

export default ContentContainer;
