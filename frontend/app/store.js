import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/slices/userSlice';
import sessionReducer from '../features/slices/sessionSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    session: sessionReducer,
  },
});

export default store;
