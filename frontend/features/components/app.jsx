import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Link,
  BrowserRouter,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavContainer from '../components/header/nav_container';

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
    <Routes>
      <Route exact path="/login" element={<LoginFormContainer />} />
      <Route exact path="/signup" element={<SignupFormContainer />} />
    </Routes>
  </div>
);

export default App;
