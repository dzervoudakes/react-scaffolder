import * as React from 'react';
import './ContentContainer.scss';

interface ContentContainerProps {
  children: JSX.Element[] | JSX.Element;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => (
  <div className="content-container">{children}</div>
);

export default ContentContainer;
