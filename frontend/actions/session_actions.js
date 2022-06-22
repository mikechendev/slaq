import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = createAction('receiveCurrentUser');
export const logoutCurrentUser = createAction('logoutCurrentUser');
export const receiveSessionErrors = createAction('receiveSessionErrors');

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors([err.message]))
  );

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveSessionErrors([err.message]))
  );
};

export const logout = () => (dispatch) =>
  APIUtil.logout().then((user) => dispatch(logoutCurrentUser()));

// export const signup = createAsyncThunk(
//   'user/signup',
//   async (user, thunkAPI) => {
//     const response = await APIUtil.signup(user);
//     return thunkAPI.dispatch(receiveCurrentUser(response));
//   }
// );

// export const login = createAsyncThunk('user/login', async (user, thunkAPI) => {
//   const response = await APIUtil.login(user);
//   return thunkAPI.dispatch(receiveCurrentUser(response));
// });

// export const logout = createAsyncThunk('user/logout', async (thunkAPI) => {
//   const response = await APIUtil.logout();
//   return thunkAPI.dispatch(logoutCurrentUser());
// });
