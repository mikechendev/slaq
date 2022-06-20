import { configureStore } from '@reduxjs/toolkit';
import entitiesReducer from '../features/slices/entitiesReducer';
import sessionReducer from '../features/slices/sessionSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
