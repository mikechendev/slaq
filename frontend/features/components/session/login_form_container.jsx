import { connect, useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: 'login',
  navLink: <Link to="/signup">sign up</Link>,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(SessionForm);

// const loginFormContainer = () => {
//   const foo = useSelector((state) => state.session);
//   const dispatch = useDispatch();

//   const onSubmitHandler = async (user) => {
//     try {
//       const res = await dispatch(login(user));
//       return res
//     } catch (err) {
//       dispatch(receiveErrors(err));
//     }
//   };
// };
