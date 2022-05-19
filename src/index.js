import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import createAppStore from "./store";
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom'

const store = createAppStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();

