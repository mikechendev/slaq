import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import store from './app/store';
import Root from './features/components/root';
import { signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOMClient.createRoot(document.getElementById('root'));
  const newStore = store;
  window.store = newStore;
  window.signup = signup;
  root.render(<Root store={newStore} />);
});
