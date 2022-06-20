import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

// const mSTP = ({ errors }) => ({
//   errors: errors.session,
//   formType: 'signup',
//   navLink: <Link to="/login">log in</Link>,
// });

// const mDTP = (dispatch = {
//   processForm: (user) => dispatch(signup(user)),
// });

const dispatch = useDispatch();

export const mSTP = useSelector((state) => {
  errors: state.errors.session;
  formType: 'signup';
  navLink: <Link to="/login">log in</Link>;
});

export const mDTP = { processForm: (user) => dispatch(signup(user)) };
