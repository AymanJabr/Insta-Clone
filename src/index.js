import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root'),
);
