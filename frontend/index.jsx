import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const configureStore = store();
  ReactDOM.render(<Root store={configureStore} />, root);
});
