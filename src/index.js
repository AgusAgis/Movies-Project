import React from 'react';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {createRoot} from "react-dom/client"

//React 18 actualizado//
createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <BrowserRouter>
    <App name="App"/>
    </BrowserRouter>
  </React.StrictMode>
)

//Algo estaba mal, funcionaba pero chillaba
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(
// <React.StrictMode>
//   
//      <App name="App" />
//   </BrowserRouter>
// </React.StrictMode>
// );

