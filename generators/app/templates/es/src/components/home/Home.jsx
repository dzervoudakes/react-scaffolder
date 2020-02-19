import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@shared/layout';
import SectionHeader from '@shared/section-header';

const Home = () => (
  <Layout>
    <SectionHeader title="Welcome to your new React App!" description="Made with ❤️." />
    <p>
      <Link to="/documentation">Click here</Link> to view the build instructions.
    </p>
  </Layout>
);

export default Home;
