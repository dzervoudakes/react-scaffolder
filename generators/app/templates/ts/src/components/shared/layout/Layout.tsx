import React from 'react';
import './Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <main className="layout">{children}</main>
);

export default Layout;
