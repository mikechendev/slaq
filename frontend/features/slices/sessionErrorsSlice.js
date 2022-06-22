import { createSlice } from '@reduxjs/toolkit';
import {
  receiveErrors,
  receiveCurrentUser,
} from '../../actions/session_actions';

export const sessionErrorsSlice = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(receiveErrors, (state, action) => {
      return action.errors;
    });
    builder.addCase(receiveCurrentUser, (state, action) => {
      return [];
    });
  },
});

export default sessionErrorsSlice.reducer;
