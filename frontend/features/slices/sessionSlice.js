import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout } from '../../actions/session_actions';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    id: null,
  },
  reducers: {
    receiveCurrentUser: (state, action) => (state = { id: action.payload.data.id }),
    logoutCurrentUser: (state, action) => (state = { id: null }),
  },
  // extraReducers: {
  //   [signup.fulfilled]: (state, action) =>
  //     (state.session = action.payload.data.id),
  //   [login.fulfilled]: (state, action) =>
  //     (state.session = action.payload.data.id),
  //   [logout.fulfilled]: (state, action) => {
  //     state.session = [];
  //   },
  // },
});

export const { receiveCurrentUser, logoutCurrentUser } = sessionSlice.actions;
export default sessionSlice.reducer;
