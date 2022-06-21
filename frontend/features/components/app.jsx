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
        <ul>
          <li>
            <Link to="/">Products </Link>
          </li>
          <li>
            <Link to="/">Solutions </Link>
          </li>
          <li>
            <Link to="/">Enterprise </Link>
          </li>
          <li>
            <Link to="/">Resources </Link>
          </li>
          <li>
            <Link to="/">Pricing </Link>
          </li>
        </ul>
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
