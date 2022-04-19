import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ecommerce from './App';
import Table from './APP2'; 
import reportWebVitals from './reportWebVitals';

const element = ReactDOM.createRoot(document.getElementById('main'));
element.render(
  <React.StrictMode>
    <Ecommerce />
  </React.StrictMode>
);

const elementtableau = ReactDOM.createRoot(document.getElementById('espace-tableau'));
elementtableau.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>
);

// If you want to start measuring performance in your Ecommerce, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
