import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as APIUtil from '../util/workspace_api_util';

export const receiveWorkspaces = createAction('receiveWorkspaces');
export const receiveWorkspace = createAction('receiveWorkspace');
export const removeWorkspace = createAction('removeWorkspace');

export const fetchWorkspaces = createAsyncThunk(
  'workspaces/fetch',
  async (workspaces, thunkAPI) => {
    const response = await APIUtil.fetchWorkspaces();
    return thunkAPI.dispatch(receiveWorkspaces(response));
  }
);

export const fetchWorkspace = createAsyncThunk(
  'workspace/fetch',
  async (workspace, thunkAPI) => {
    const response = await APIUtil.fetchWorkspace(workspace);
    return thunkAPI.dispatch(receiveWorkspace(response));
  }
);

export const createWorkspace = createAsyncThunk(
  'workspace/create',
  async (workspace, thunkAPI) => {
    const response = await APIUtil.createWorkspace(workspace);
    return thunkAPI.dispatch(receiveWorkspace(response));
  }
);

export const deleteWorkspace = (workspaceId) => (dispatch) =>
  APIUtil.deleteWorkspace(workspaceId).then(() =>
    dispatch(removeWorkspace(workspaceId))
  );
