import React, {useEffect} from 'react';
import './_app.scss';
import WOW from 'wow.js';

//Components
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Expertise from './components/Expertise/Expertise';

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
      <h1 className="h1-4">4</h1>
      <h1 className="h1-5">5</h1>
      <h1 className="h1-6">6</h1>
      <h1 className="h1-7">7</h1>
      <h1 className="h1-8">8</h1>
    </div>
  );
}

export default App;
