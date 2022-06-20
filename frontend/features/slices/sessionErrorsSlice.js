import { createSlice } from '@reduxjs/toolkit';

export const sessionErrorsSlice = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {
    receiveSessionErrors(state, action) {
      action.errors;
    },
    receiveCurrentUser(state, action) {
      [];
    },
  },
});

export default sessionErrorsSlice.reducer;
