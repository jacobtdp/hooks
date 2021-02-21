import './App.css';

import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Hero />
        <Services />
        <Carousel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
