import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import actionCable from 'actioncable';
import { createContext } from 'react';

const CableApp = {};

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable');
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
