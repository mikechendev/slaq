import { connect } from 'react-redux';
import Splash from './splash';
import { logout } from '../../../actions/session_actions';

const mSTP = ({ session, entities: { user } }) => ({
  currentUser: user[session.id],
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Splash);
