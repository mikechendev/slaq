import { createSlice } from '@reduxjs/toolkit';
import { receiveCurrentUser } from '../../actions/session_actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    // receiveCurrentUser: (state, action) => {
    //   state.push(action.payload.data);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(receiveCurrentUser, (state, action) => {
      return (state = action.payload.data);
    });
  },
});

// export const { receiveCurrentUser } = userSlice.actions;
export default userSlice.reducer;
