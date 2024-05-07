import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'dragOnDrop',
    initialState: false,
    reducers: {
      drag(){},
      on(){},
      drop(){},
    },
});

export const { drag, on, drop } = slice.actions;
export default slice.reducer;