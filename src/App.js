import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro'
import './app.scss';
import { useState } from 'react';
import Menu from './components/menu/Menu';


function App() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
      {/* topBar */}
      {/* section   -about -portfolio -experience .... */}
      <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
