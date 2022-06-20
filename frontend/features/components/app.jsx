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

const App = () => (
  <div>
    <header>
      <h1>Slaq</h1>
      <br />
      <Link to="/signup">sign up</Link>
      <br />
      <Link to="/login">log in</Link>
      <br />
    </header>
    <Routes>
      <Route exact path="/login" element={<LoginFormContainer />} />
      <Route exact path="/signup" element={<SignupFormContainer />} />
    </Routes>
  </div>
);

export default App;
