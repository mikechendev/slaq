import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = createAction('receiveCurrentUser');
export const logoutCurrentUser = createAction('logoutCurrentUser');
export const receiveErrors = createAction('receiveSessionErrors');

export const signup = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    const response = await APIUtil.signup(user);
    return thunkAPI.dispatch(receiveCurrentUser(response));
  }
);

export const login = createAsyncThunk('user/login', async (user, thunkAPI) => {
  const response = await APIUtil.login(user);
  return thunkAPI.dispatch(receiveCurrentUser(response));
});

export const logout = createAsyncThunk('user/logout', async (thunkAPI) => {
  const response = await APIUtil.logout();
  return thunkAPI.dispatch(logoutCurrentUser(response));
});
