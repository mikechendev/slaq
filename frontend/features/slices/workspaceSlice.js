import { createSlice } from '@reduxjs/toolkit';
import {
  receiveWorkspaces,
  receiveWorkspace,
  removeWorkspace,
} from '../../actions/workspace_actions';

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(receiveWorkspaces, (state, action) => {
        return (state = action.payload);
      })
      .addCase(receiveWorkspace, (state, action) => {
        return (state = { ...state, [action.payload.id]: action.payload });
      })
      .addCase(removeWorkspace, (state, action) => {
        delete state[action.payload];
        return state;
      });
  },
});

export default workspaceSlice.reducer;
