import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles (adjust as needed)
import App from './app'; // Make sure App.js is in the same folder as this script
import reportWebVitals from './reportWebVitals'; // Optional, but useful for performance monitoring

// Ensure the root element exists in your HTML (in your case, this should be in the index.html)
const rootElement = document.getElementById('root'); // Ensure the div with id='root' exists in index.html
if (!rootElement) {
  console.error("Root element not found! Make sure 'index.html' has <div id='root'></div>");
} else {
  // Create the root and render the App component inside it
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Optional: Report web vitals for performance monitoring
reportWebVitals();
