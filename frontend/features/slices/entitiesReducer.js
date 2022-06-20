import { combineReducers } from 'redux';
import userReducer from './userSlice';

const entitiesReducer = combineReducers({
  user: userReducer,
});

export default entitiesReducer;
