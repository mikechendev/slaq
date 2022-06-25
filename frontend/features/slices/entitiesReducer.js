import { combineReducers } from 'redux';
import userReducer from './userSlice';

const entitiesReducer = combineReducers({
  users: userReducer,
});

export default entitiesReducer;
