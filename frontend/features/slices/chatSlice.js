import { createSlice } from '@reduxjs/toolkit';
import {
  receiveChats,
  receiveChat,
  removeChat,
} from '../../actions/chat_actions';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(receiveChats, (state, action) => {
        return (state = action.payload);
      })
      .addCase(receiveChat, (state, action) => {
        return (state = { ...state, [action.payload.id]: action.payload });
      })
      .addCase(removeChat, (state, action) => {
        delete state[action.payload];
        return state;
      });
  },
});

export default chatSlice.reducer;
