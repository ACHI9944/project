import {configureStore} from '@reduxjs/toolkit';
import notesSlice from './data';

export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
  },
});
