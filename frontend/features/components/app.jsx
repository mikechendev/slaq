import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavContainer from '../components/header/nav_container';
import Splash from './splash/splash';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-app">
        <h1>SlaQ</h1>
      </Link>
      <nav className="info-links">
        <Link to="/">Products </Link>
        <Link to="/">Solutions </Link>
        <Link to="/">Enterprise </Link>
        <Link to="/">Resources </Link>
        <Link to="/">Pricing </Link>
      </nav>
      <NavContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
