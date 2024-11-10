import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Optional: CSS for global styles
import App from './App';  // The root component of your application

// Rendering the App component into the root div in your public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
