import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import GetStarted from './workspaces/get_started';
import SetupWorkspace from './workspaces/setup_workspace';
import Workspace from './workspaces/workspace';
import ChatBot from './chats/chatbot';
import Favicon from 'react-favicon';

const App = () => (
  <div>
    <Favicon url="https://cdn-icons-png.flaticon.com/512/732/732245.png" />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/chatbot" component={ChatBot} />
      <ProtectedRoute path="/get-started" component={GetStarted} />
      <ProtectedRoute
        path="/client/:workspaceId/setup-workspace"
        component={SetupWorkspace}
      />
      <ProtectedRoute
        path="/client/:workspaceId/:channelId"
        component={Workspace}
      />
    </Switch>
  </div>
);

export default App;
