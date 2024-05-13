import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Issue } from "../../components/InputApi";

const initialState: Issue[] = [];
const slice = createSlice({
  name: 'moveItem',
  initialState,
  reducers: {
    moveItem: (state, action: PayloadAction<{ number: string | number; title: string; body: string }>) => {
      const { number, title, body } = action.payload;
      const index = state.findIndex(issue => issue.number === number);
      if(index !== -1) {
        state[index].title = title;
        state[index].body = body;
      }
    },
  },
});

export const { moveItem } = slice.actions;
export default slice.reducer;
