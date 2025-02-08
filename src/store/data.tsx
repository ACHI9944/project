import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Note} from './types';

const initialState: Note[] = [];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<{header: string; text: string}>) => {
      const newNote = {
        id:
          Math.random().toString() +
          action.payload.header +
          action.payload.text,
        header: action.payload.header,
        text: action.payload.text,
      };
      state.push(newNote);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      return state.filter(note => note.id !== action.payload);
    },
  },
});

export const {addNote, removeNote} = notesSlice.actions;
export default notesSlice;
