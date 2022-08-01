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
  extraReducers: (builder) => {
    builder
      .addCase(receiveMessages, (state, action) => {
        return (state = action.payload);
      })
      .addCase(receiveMessage, (state, action) => {
        return (state = { ...state, [action.payload.id]: action.payload });
      })
      .addCase(removeMessage, (state, action) => {
        delete state[action.payload];
        return state;
      });
  },
});

export default messagesSlice.reducer;
