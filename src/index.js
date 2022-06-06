import React from 'react';
import App from './App';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
<React.StrictMode>
  <BrowserRouter>
     <App name="App" />
  </BrowserRouter>
</React.StrictMode>
);

