import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import actionCable from 'actioncable';
import { createContext } from 'react';

const CableApp = {};

//development
// CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable');

// production
CableApp.cable = actionCable.createConsumer(
  'wss://slaq-mc.herokuapp.com/cable'
);

export const ActionCableContext = createContext();

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <ActionCableContext.Provider value={CableApp.cable}>
        <App />
      </ActionCableContext.Provider>
    </HashRouter>
  </Provider>
);

export default Root;
