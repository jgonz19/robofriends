import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './containers/App';
import 'tachyons';
//import {robots} from './robots'; // if  we have another props(property) like cats, we need to write {robots, cats}

ReactDOM.render(
  <App />,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
