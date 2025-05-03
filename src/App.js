import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container/index.js';
import { Navbar } from './components/index.js';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <SpecialMenu />
    <Laurels />
    <Chef />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
