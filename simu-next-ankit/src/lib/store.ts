import { configureStore } from '@reduxjs/toolkit';
import moduleReducer from './features/modules/moduleSlice';

export const store = configureStore({
  reducer: {
    module: moduleReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;