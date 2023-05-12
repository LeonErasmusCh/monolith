'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setExample: (state, action) => {
      state.value = action.payload;
    },
    addExample: (state, action) => {
      state.value += 1;
    },
    subtractExample: (state, action) => {
      state.value -= 1;
    },
    resetExample: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setExample, resetExample, addExample, subtractExample } = exampleSlice.actions;
export default exampleSlice.reducer;
