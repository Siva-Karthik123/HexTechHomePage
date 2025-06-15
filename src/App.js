import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TopTicker from './components/TopTicker';
import Partners from './components/Partners';
import Notebook from './components/Notebook';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopTicker />
      <Navbar />
      <Hero />
      <Partners/>
      <Features />
      <Notebook/>
      <Footer />
    </div>
  );
}

export default App;
