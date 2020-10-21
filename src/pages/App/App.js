import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Clock from '../../components/Clock/Clock'
import NavBar from '../../components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Clock />
      <h1>Cory rules</h1>
    </div>
  );
}

export default App;
