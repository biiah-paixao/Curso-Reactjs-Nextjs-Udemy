import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import { Home } from './templates/Home';
//import Aula1 from './Aula1';
//import Aula2 from './Aula2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Aula1 /> */}
    {/* <Aula2 /> */}
    <Home />
  </React.StrictMode>,
);
