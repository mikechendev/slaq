import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../../actions/session_actions';
import {
  fetchWorkspaces,
  fetchWorkspace,
} from '../../../actions/workspace_actions';

const mSTP = ({
  session,
  entities: { users },
  entities: { workspaces, chats },
}) => ({
  currentUser: users[session.id],
  workspaces: Object.values(workspaces),
  chats: Object.values(chats),
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchWorkspaces: () => dispatch(fetchWorkspaces()),
  fetchWorkspace: (workspaceId) => dispatch(fetchWorkspace(workspaceId)),
});

export default connect(mSTP, mDTP)(Splash);
