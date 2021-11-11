import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Provider from './Context/Provider';


ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

