import { combineReducers } from 'redux';
import usersReducer from './userSlice';
import workspacesReducer from './workspaceSlice';
import chatsReducer from './chatSlice';
import messagesReducer from './messagesSlice';

const entitiesReducer = combineReducers({
  users: usersReducer,
  workspaces: workspacesReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

export default entitiesReducer;
