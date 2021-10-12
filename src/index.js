import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Parent from "./Components/Parent"
import Load from './Components/Load';
import Check1 from './Components/Check1';

ReactDOM.render(
  <React.StrictMode>
   <App /> 
    {/* <Load /> */}
    {/* <Parent /> */}
    {/* <Check1 /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
