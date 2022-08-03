import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import {
  receiveMessage,
  receiveMessages,
  removeMessage,
} from '../../actions/message_actions';

const messagesAdapter = createEntityAdapter();

const initialState = messagesAdapter.getInitialState({});

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageReceived(state, action) {
      const data = action.payload.data;
      const message = {
        id: data.id,
        ...data.attributes,
        chatId: data.relationships.chat.data.id,
        userId: data.relationships.user.data.id,
      };
      messagesAdapter.addOne(state, message);
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(receiveMessages, (state, action) => {
    //     return (state = action.payload);
    //   })
    //   .addCase(receiveMessage, (state, action) => {
    //     return (state = { ...state, [action.payload.id]: action.payload });
    //   })
    //   .addCase(removeMessage, (state, action) => {
    //     delete state[action.payload];
    //     return state;
    //   });
  },
});

export const { messageReceived } = messagesSlice.actions;

export default messagesSlice.reducer;
