import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greeter from '../../components/Greeter/Greeter'
import Clock from '../../components/Clock/Clock'

function App() {
  return (
    <div className="App">
      <Clock />
      <h1>Cory rules</h1>
      <Greeter
        earthling={{ name: 'Wilma', town: 'Roswell' }} />
    </div>
  );
}

export default App;
