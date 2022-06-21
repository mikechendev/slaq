import { configureStore } from '@reduxjs/toolkit';
import entitiesReducer from '../features/slices/entitiesReducer';
import sessionReducer from '../features/slices/sessionSlice';
import errorsReducer from '../features/slices/errorsReducer';
import logger from 'redux-logger';

// const reducers = {
//   reducer: {
//     entities: entitiesReducer,
//     session: sessionReducer,
//     errors: errorsReducer,
//   },
// };

// const middlewares = {
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// };

const store = (preloadedState = {}) =>
  configureStore({
    reducer: {
      entities: entitiesReducer,
      session: sessionReducer,
      errors: errorsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    preloadedState,
  });

export default store;
