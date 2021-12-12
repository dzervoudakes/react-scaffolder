import Footer from '@src/components/Footer';
import Header from '@src/components/Header';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <Routes />
    </main>
    <Footer />
  </>
);

export default App;
