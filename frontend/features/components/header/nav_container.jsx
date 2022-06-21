import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Nav from './nav';

const mSTP = ({ session, entities: { user } }) => ({
  currentUser: user[session.id],
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Nav);
