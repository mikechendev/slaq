import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import store from './app/store';
import Root from './features/components/root';
import { signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOMClient.createRoot(document.getElementById('root'));
  // let newStore;
  // debugger;
  // if (window.currentUser) {
  //   const { currentUser } = window;
  //   const { id } = currentUser;
  //   const preloadedState = {
  //     entities: {
  //       user: {
  //         [id]: currentUser,
  //       },
  //     },
  //     session: { id },
  //   };
  //   store = store(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   newStore = store();
  // }
  const newStore = store();
  root.render(<Root store={newStore} />);
});
