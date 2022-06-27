import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as workspaceAPIUtil from '../util/workspace_api_util';

export const receiveWorkspaces = createAction('receiveWorkspaces');
export const receiveWorkspace = createAction('receiveWorkspace');
export const removeWorkspace = createAction('removeWorkspace');

// export const fetchWorkspaces = createAsyncThunk(
//   'workspaces',
//   async (workspaces, thunkAPI) => {
//     const response = await workspaceAPIUtil.fetchWorkspaces();
//     return thunkAPI.dispatch(receiveWorkspaces(response));
//   }
// );

// export const fetchWorkspace = createAsyncThunk(
//   'fetchWorkspace',
//   async (workspace, thunkAPI) => {
//     const response = await workspaceAPIUtil.fetchWorkspace(workspace);
//     return thunkAPI.dispatch(receiveWorkspace(response));
//   }
// );

// export const createWorkspace = createAsyncThunk(
//   'createWorkspace',
//   async (workspace, thunkAPI) => {
//     const response = await workspaceAPIUtil.createWorkspace(workspace);
//     return thunkAPI.dispatch(receiveWorkspace(response));
//   }
// );

export const fetchWorkspaces = () => (dispatch) =>
  workspaceAPIUtil
    .fetchWorkspaces()
    .then((workspaces) => dispatch(receiveWorkspaces(workspaces)));

export const fetchWorkspace = (workspace) => (dispatch) =>
  workspaceAPIUtil
    .fetchWorkspace(workspace)
    .then((workspace) => dispatch(receiveWorkspace(workspace)));

export const createWorkspace = (workspace) => (dispatch) =>
  workspaceAPIUtil
    .createWorkspace(workspace)
    .then((workspace) => dispatch(receiveWorkspace(workspace)));

export const deleteWorkspace = (workspaceId) => (dispatch) =>
  workspaceAPIUtil
    .deleteWorkspace(workspaceId)
    .then(() => dispatch(removeWorkspace(workspaceId)));
