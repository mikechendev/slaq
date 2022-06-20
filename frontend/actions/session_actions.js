import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = createAction('receiveCurrentUser');
export const logoutCurrentUser = createAction('logoutCurrentUser');
export const receiveErrors = createAction('receiveSessionErrors');

export const signup = createAsyncThunk('user/signup', async (user) => {
  const response = await APIUtil.signup(user);
  return response;
});

export const login = createAsyncThunk('user/login', async (user) => {
  const response = await APIUtil.login(user);
  return response;
});

export const logout = createAsyncThunk('user/logout', async () => {
  const response = await APIUtil.logout();
  return response;
});
