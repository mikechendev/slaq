import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
