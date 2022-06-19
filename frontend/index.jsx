import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import store from './app/store';
import Root from './features/components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOMClient.createRoot(document.getElementById('root'));
  const configureStore = store();
  root.render(<Root store={configureStore} />);
});
