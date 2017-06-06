/* eslint global-require: "off"*/
// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

if (process.env.NODE_ENV === 'production') {
  // production setup
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );

  // service worker
  require('offline-plugin/runtime').install();
}

const Perf = require('react-addons-perf');

// development setup with HMR
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

// after App import
window.Perf = Perf;
Perf.start();
