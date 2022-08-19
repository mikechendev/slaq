import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  receiveMessage,
  receiveMessages,
  removeMessage,
} from '../../actions/message_actions';
import { isAfter, parseISO, subYears } from 'date-fns';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {},
  reducers: {
    messageReceived(state, action) {
      const data = action.payload.message;
      const message = {
        id: data.id,
        body: data.body,
        // chatId: data.chat_id,
        userId: data.user_id,
      };
      messagesAdapter.addOne(state, message);
    },
  },
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
