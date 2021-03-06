import { combineReducers } from 'redux';
import userReducer from './userSlice';
import workspacesReducer from './workspaceSlice';
import chatsReducer from './chatSlice';

const entitiesReducer = combineReducers({
  users: userReducer,
  workspaces: workspacesReducer,
  chats: chatsReducer,
});

export default entitiesReducer;
