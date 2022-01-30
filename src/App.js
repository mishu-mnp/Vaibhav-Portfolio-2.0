import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
