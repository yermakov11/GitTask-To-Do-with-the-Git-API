import { configureStore } from '@reduxjs/toolkit';
import gitTasksReducer from './slices/issuesSlice';

const store = configureStore({
  reducer: {
    tasks: gitTasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
