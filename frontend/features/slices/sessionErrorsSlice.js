import { createSlice } from '@reduxjs/toolkit';
import {
  receiveSessionErrors,
  receiveCurrentUser,
} from '../../actions/session_actions';

export const sessionErrorsSlice = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(receiveSessionErrors, (state, action) => {
      return (state = action.payload);
    });
    builder.addCase(receiveCurrentUser, (state, action) => {
      return (state = []);
    });
  },
});

export default sessionErrorsSlice.reducer;
