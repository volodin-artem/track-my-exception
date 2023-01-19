import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./entry/App.jsx";
import Fetty from "../fettyjs/index.js";
import configuration from "./configuration.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
