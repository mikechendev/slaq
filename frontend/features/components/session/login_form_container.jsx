import { connect, useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../../actions/session_actions';
import SessionForm from './session_form';

// const mSTP = useSelector((state) => {
//   return {
//     errors: state.errors.session,
//     formType: 'login',
//     navLink: <Link to="/signup">sign up</Link>,
//   };
// });

// const dispatch = useDispatch();

// const mDTP = { processForm: (user) => dispatch(login(user)) };

const mSTP = (state) => ({
  // errors: state.errors.session,
  formType: 'login',
  navLink: <Link to="/signup">sign up</Link>,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(SessionForm);
