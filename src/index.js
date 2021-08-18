import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

var firebaseConfig = {
  apiKey: "AIzaSyAvC6UZ0iOVLzD72e9xu-dSFIXmEC9z1SA",
  authDomain: "nico-rive-db.firebaseapp.com",
  projectId: "nico-rive-db",
  databaseURL: "https://nico-rive-db-default-rtdb.firebaseio.com/",
  storageBucket: "nico-rive-db.appspot.com",
  messagingSenderId: "78994883345",
  appId: "1:78994883345:web:eb37efb969b3330cf882b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

