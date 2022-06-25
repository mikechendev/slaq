import { connect, useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { signup, login } from '../../../actions/session_actions';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign up',
  navLink: <Link to="/login">Sign into an existing workspace</Link>,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(SessionForm);
