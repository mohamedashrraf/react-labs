import './App.css';
import { Component } from 'react';

import Home from "./components/Home/Home.jsx"
import About from './components/About/About';
import Artist from './components/Artist/Artist';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div>
      
      <Home />
      <About />
      <Artist />
      <Contact />
    </div>
  );
}

export default App;
