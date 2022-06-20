import React from 'react';
import { connect } from 'react-redux';
import { Route, useLocation, useNavigate, useParams } from 'react-router-dom';

const Auth = ({ element: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({ element: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const mapStateToProps = (state) => ({ loggedIn: Boolean(state.session.id) });

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
