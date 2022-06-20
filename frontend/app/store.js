import { configureStore } from '@reduxjs/toolkit';
import entitiesReducer from '../features/slices/entitiesReducer';
import sessionReducer from '../features/slices/sessionSlice';

const store = configureStore({
  reducer: {
    entities: entitiesReducer,
    session: sessionReducer,
  },
});

export default store;
