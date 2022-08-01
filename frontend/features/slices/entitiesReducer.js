import { combineReducers } from 'redux';
import userReducer from './userSlice';
import workspacesReducer from './workspaceSlice';
import chatsReducer from './chatSlice';
import messagesReducer from './messageSlice';

const entitiesReducer = combineReducers({
  users: userReducer,
  workspaces: workspacesReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

export default entitiesReducer;
