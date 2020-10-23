import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
