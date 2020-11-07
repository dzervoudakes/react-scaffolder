import React from 'react';
import Header from '@src/components/Header';
import Footer from '@src/components/Footer';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <Header />
    <Routes />
    <Footer />
  </>
);

export default App;
