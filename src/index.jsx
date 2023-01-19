import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./entry/App.jsx";
import { reducers } from "./redux/reducers/reducers.js";
import Fetty from "../fettyjs/index.js";
import configuration from "./configuration.js";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
