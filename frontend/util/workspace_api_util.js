import axios from 'axios';

export const fetchWorkspaces = () => axios.get('/api/workspaces');

export const fetchWorkspace = (workspaceId) =>
  axios.get(`/api/workspaces/${workspaceId}`);

export const createWorkspace = (workspace) =>
  axios.post('/api/workspaces', { workspace });

export const updateWorkspace = (workspace) =>
  axios.patch(`/api/workspaces/${workspace.id}`, { workspace });

export const deleteWorkspace = (workspaceId) =>
  axios.delete(`/api/workspaces/${workspaceId}`);
