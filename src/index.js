import React from "react";  
import ReactDOM from 'react-dom/client';

// NOTE: this import imports our App.js components into index.js
import App from './App'

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);