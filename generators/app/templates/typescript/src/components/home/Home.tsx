import React from 'react';
import Layout from '@src/components/shared/layout';
import SectionHeader from '@shared/section-header';

const Home: React.FC = () => (
  <Layout>
    <SectionHeader title="Welcome to your new React App!" description="Made with ❤️" />
    <p>
      Reference <code>README.md</code> for build instructions.
    </p>
  </Layout>
);

export default Home;