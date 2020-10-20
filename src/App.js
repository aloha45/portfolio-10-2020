import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter'

function App() {
  return (
    <div className="App">
      <h1>Cory rules</h1>
      <Greeter
        earthling={{ name: 'Wilma', town: 'Roswell' }} />
    </div>
  );
}

export default App;
