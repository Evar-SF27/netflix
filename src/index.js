import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles/global-styles';
import  { db }  from './lib/firebaseProd';
import { FirebaseContext } from './context/firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <FirebaseContext.Provider value={{ db }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);