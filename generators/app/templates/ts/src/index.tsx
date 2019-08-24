import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import './scss/style';

const Main: React.FC = () => (
  <Router basename="/">
    <App />
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('root'));
