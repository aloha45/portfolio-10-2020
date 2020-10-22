import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Clock from '../../components/Clock/Clock'
import NavBar from '../../components/NavBar/NavBar'
import Projects from '../../components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Clock />
      <Projects />
    </div>
  );
}

export default App;
