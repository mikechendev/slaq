import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    id: null,
  },
  reducers: {
    receiveCurrentUser(state, action) {
      id: action.currentUser.id;
    },
    logoutCurrentUser(state, action) {
      initialState;
    },
  },
});

export const { receiveCurrentUser, logoutCurrentUser } = sessionSlice.actions;
export default sessionSlice.reducer;
