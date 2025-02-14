import {configureStore} from '@reduxjs/toolkit';
import notesSlice from './data';
import {jsonPh} from '../storeApi/jsonPh';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
    [jsonPh.reducerPath]: jsonPh.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(jsonPh.middleware),
});

setupListeners(store.dispatch);
