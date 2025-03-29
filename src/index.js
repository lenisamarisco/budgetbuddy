import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';  // Make sure this matches your file name ('App.js', not 'app.js')
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
