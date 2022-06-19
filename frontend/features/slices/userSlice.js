import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    receiveCurrentUser: (state, action) => {
      state.push({ [action.CurrentUser.id]: action.currentUser });
    },
  },
});

export const { receiveCurrentUser } = userSlice.actions;
export default userSlice.reducer;
