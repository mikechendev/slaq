import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link to="/login">log in</Link>,
});

const mDTP = (dispatch = {
  processForm: (user) => dispatch(signup(user)),
});
