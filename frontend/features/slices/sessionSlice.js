import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout } from '../../actions/session_actions';
import {
  receiveCurrentUser,
  logoutCurrentUser,
} from '../../actions/session_actions';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    id: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(receiveCurrentUser, (state, action) => {
      return (state = { id: action.payload.data.id });
    });
    builder.addCase(logoutCurrentUser, (state, action) => {
      return (state = { id: null });
    });
  },
});

export default sessionSlice.reducer;
