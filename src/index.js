import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import configureStore from './Reducers/Index';
import Routes from './Routes/Routes';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
