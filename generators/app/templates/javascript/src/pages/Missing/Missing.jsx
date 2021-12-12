import { Link } from 'react-router-dom';

import Layout from '@src/components/Layout';
import PageHeader from '@src/components/PageHeader';

const Missing = () => (
  <Layout>
    <PageHeader title="That's a 404" description="You must be lost..." />
    <p>
      <Link to="/" className="link-purple">
        Click here
      </Link>{' '}
      to return to the main application.
    </p>
  </Layout>
);

export default Missing;
