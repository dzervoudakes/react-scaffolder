/**
 * @fileoverview Defines top-level application routes.
 */
import Home from '@src/components/home';
import Documentation from '@src/components/documentation';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/documentation',
    component: Documentation
  }
];

export default routes;
