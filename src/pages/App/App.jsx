import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Clock from '../../components/Clock/Clock'
import NavBar from '../../components/NavBar/NavBar'
import AboutMe from '../../components/AboutMe/AboutMe'
import Projects from '../../components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Clock />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
