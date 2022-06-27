import { combineReducers } from 'redux';
import userReducer from './userSlice';
import workspacesReducer from './workspaceSlice';

const entitiesReducer = combineReducers({
  users: userReducer,
  workspaces: workspacesReducer,
});

export default entitiesReducer;
