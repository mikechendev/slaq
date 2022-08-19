import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  receiveMessage,
  receiveMessages,
  removeMessage,
} from '../../actions/message_actions';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(receiveMessages, (state, action) => {
        return (state = action.payload['data']);
      })
      .addCase(receiveMessage, (state, action) => {
        return (state = {
          ...state,
          [action.payload.message.id]: action.payload.message,
        });
      })
      .addCase(removeMessage, (state, action) => {
        delete state[action.payload];
        return state;
      });
  },
});

export default messagesSlice.reducer;
