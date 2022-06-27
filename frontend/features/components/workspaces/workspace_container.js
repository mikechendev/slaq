import React from 'react';
import { Link } from 'react-router-dom';
import Workspace from './workspace';
import {
  fetchWorkspaces,
  fetchWorkspace,
} from '../../../actions/workspace_actions';
import { logout } from '../../../actions/session_actions';
import { connect } from 'react-redux';

const mSTP = (state) => ({
  workspaces: state.entities.workspaces,
  currentUserId: state.session.id,
  currentUser: state.entities.users[state.session.id],
  currentUserWorkspaces: state.entities.users[state.session.id].workspaces,
});

const mDTP = (dispatch) => ({
  fetchWorkspaces: () => dispatch(fetchWorkspaces()),
  fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Workspace);
