import { createSlice } from '@reduxjs/toolkit';
import {
  receiveMessage,
  receiveMessages,
  removeMessage,
} from '../../actions/message_actions';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {},
  reducers: {},
});
