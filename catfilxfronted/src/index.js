import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import english from './translations/en/global.json'
import hindi from './translations/hi/global.json'

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';


i18next.init({
  interpolation :{escapeValue: true},
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en:{
      global: english
    },
    hi:{
      global: hindi
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<I18nextProvider i18n={i18next}>
     <App />
     </I18nextProvider>
  </React.StrictMode>
);


