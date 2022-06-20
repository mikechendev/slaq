import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Link, BrowserRouter } from 'react-router-dom';
import SessionForm from './session/session_form';

const App = () => (
  <div>
    <header>
      <h1>Slaq</h1>
      <SessionForm />
    </header>
  </div>
);

export default App;
