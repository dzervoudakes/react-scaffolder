import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@shared/layout';
import Readme from '../../../README.md';
import './Documentation.scss';

const Documentation = () => (
  <Layout>
    <p>
      <Link to="/">
        <span>&lt;</span> Go Back
      </Link>
    </p>
    <div className="readme-container">
      <Readme />
    </div>
  </Layout>
);

export default Documentation;
