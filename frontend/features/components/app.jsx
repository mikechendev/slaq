import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import WorkspaceContainer from './workspaces/workspace_container';
import GetStarted from './workspaces/get_started';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashContainer} />
      <ProtectedRoute
        path="/workspaces/:workspaceId"
        component={WorkspaceContainer}
      />
      <ProtectedRoute path="/get-started" component={GetStarted} />
    </Switch>
  </div>
);

export default App;
