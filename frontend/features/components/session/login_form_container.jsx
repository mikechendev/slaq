import { connect, useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveSessionErrors } from '../../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'Log in',
  navLink: <Link to="/signup">Create an account</Link>,
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
  login: (user) => dispatch(login(user)),
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
