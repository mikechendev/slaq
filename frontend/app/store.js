import { configureStore } from '@reduxjs/toolkit';
import entitiesReducer from '../features/slices/entitiesReducer';
import sessionReducer from '../features/slices/sessionSlice';
import errorsReducer from '../features/slices/errorsReducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
