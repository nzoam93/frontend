import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//Adding for env purposes
// Read the background color from the environment variable
const backgroundColor = process.env.REACT_APP_BACKGROUND_COLOR || 'rgb(182, 205, 212)';

// Set the CSS variable
document.documentElement.style.setProperty('--REACT_APP_BACKGROUND_COLOR', backgroundColor);

// console.log('process.env.background: ', process.env.REACT_APP_BACKGROUND_COLOR)
// console.log('background Color: ', backgroundColor)
