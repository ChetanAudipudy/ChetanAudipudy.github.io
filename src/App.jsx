import React, {useEffect} from 'react';
import './_app.scss';
import WOW from 'wow.js';

//Components
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Expertise from './components/Expertise/Expertise'
import Portfolio from './components/Portfolio/Portfolio'
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    const wow = new WOW({
      offset: 20,
      mobile: true,
      live: true
    })
    wow.init()
  },[])

  return (
    <div className="app-container">
      <Hero />
      <Header />
      <Expertise />
      <Portfolio />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
