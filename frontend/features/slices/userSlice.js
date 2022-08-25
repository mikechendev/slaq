import { createSlice } from '@reduxjs/toolkit';
import { receiveCurrentUser } from '../../actions/session_actions';
import { receiveUsers } from '../../actions/user_actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(receiveCurrentUser, (state, action) => {
        return (state = { [action.payload.data.id]: action.payload.data });
      })
      .addCase(receiveUsers, (state, action) => {
        return (state = action.payload['data']);
      });
  },
});

export default userSlice.reducer;
