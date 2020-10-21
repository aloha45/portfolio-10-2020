import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import Greeter from './components/Greeter/Greeter';

const g = <Greeter />;
console.dir(g)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
