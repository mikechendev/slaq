import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import actionCable from 'actioncable';

const actionCable = {};

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable');

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App cableApp={CableApp} />
    </HashRouter>
  </Provider>
);

export default Root;
