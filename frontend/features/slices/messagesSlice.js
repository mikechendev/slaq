import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import {
  receiveMessage,
  receiveMessages,
  removeMessage,
} from '../../actions/message_actions';
import { isAfter, parseISO, subYears } from 'date-fns';

const messagesAdapter = createEntityAdapter();

const initialState = messagesAdapter.getInitialState({
  status: 'idle',
  error: null,
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageReceived(state, action) {
      const data = action.payload.message;
      const message = {
        id: data.id,
        body: data.body,
        chatId: data.chat_id,
        userId: data.user_id,
      };
      messagesAdapter.addOne(state, message);
    },
  },
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

export const { messageReceived } = messagesSlice.actions;

export const { selectAll: selectAllMessages } = messagesAdapter.getSelectors(
  (state) => state.entities.messages
);

export const selectMessagesByChat = createSelector(
  [selectAllMessages, (state, chatId) => chatId],
  (messages, chatId) => messages.filter((message) => message.chatId === chatId)
);

export default messagesSlice.reducer;
