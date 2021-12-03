import { Route, Routes as Switch } from 'react-router-dom';

import Home from '@src/pages/Home';
import Missing from '@src/pages/Missing';

const Routes = () => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Missing />} />
  </Switch>
);

export default Routes;
