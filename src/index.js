import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './redux/configureStore';
//axios default
axios.defaults.baseURL = 'http://127.0.0.1:8000';
// axios.defaults.headers.common['Authorization']='Bearer ' + localStorage.getItem('token');
const { store, persistor } = configureStore()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
