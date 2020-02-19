import * as React from 'react';
import './Layout.scss';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <main className="layout">{children}</main>
);

export default Layout;
