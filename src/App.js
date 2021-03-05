import './App.css';

import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Carousel from './components/carousel/Carousel';
import Bio from './components/bio/Bio';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">

        <Nav />

        <div className="line-o1"></div>
        <div className="line-white"></div>
        <div className="line-black"></div>
        <div className="line-o2"></div>

        <Hero />

        <div className="third-layer">
          <Services />
          <Carousel />
        </div>

        <Bio />
        <Gallery />
        {/* <Contact /> */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
