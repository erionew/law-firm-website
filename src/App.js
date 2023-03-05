import './App.css';
import Header from './components/Header';
import About from './components/About';
import SomeFeatures from './components/SomeFeatures';

function App() {
  return (
    <div className="App">
      <Header aboutPath='#' testimonialsPath='#' expertisePath='#' contactPath='#' />
      <About />
      <SomeFeatures />
    </div>
  );
}

export default App;
