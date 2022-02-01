import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro'


function App() {
  return (
    <div className="App">
      {/* topBar */}
      {/* section   -about -portfolio -experience .... */}
      <Topbar />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
