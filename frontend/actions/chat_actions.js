import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as chatAPIUtil from '../util/chat_api_util';

export const receiveChats = createAction('receiveChats');
export const receiveChat = createAction('receiveChat');
export const removeChat = createAction('removeChat');
