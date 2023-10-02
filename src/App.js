import { AllRoutes } from './routes/AllRoutes';
import { Header } from './components/Header';
import './App.css';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
