import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout } from '../../actions/session_actions';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    id: null,
    status: null,
  },
  reducers: {
    receiveCurrentUser(state, action) {
      id: action.currentUser.id;
    },
    logoutCurrentUser(state, action) {
      id: null;
    },
  },
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.status = 'success';
      state.session = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'success';
      state.session = action.payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.status = 'success';
      state.session = action.payload;
    },
  },
});

export const { receiveCurrentUser, logoutCurrentUser } = sessionSlice.actions;
export default sessionSlice.reducer;
