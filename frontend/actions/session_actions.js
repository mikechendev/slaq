import { createAction } from '@reduxjs/toolkit';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = createAction('receiveCurrentUser');
export const logoutCurrentUser = createAction('logoutCurrentUser');
export const receiveErrors = createAction('receiveSessionErrors');
