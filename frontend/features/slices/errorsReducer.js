import { combineReducers } from 'redux';
import sessionErrorsReducer from './sessionErrorsSlice';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default errorsReducer;
