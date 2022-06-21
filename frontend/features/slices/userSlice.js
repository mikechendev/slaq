import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    receiveCurrentUser: (state, action) => (state = action.payload.data),
  },
});

export const { receiveCurrentUser } = userSlice.actions;
export default userSlice.reducer;
