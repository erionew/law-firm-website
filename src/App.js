import './App.css';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header aboutPath='#' testimonialsPath='#' expertisePath='#' contactPath='#' />
      <About />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
