import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    light: (state) => {
      state.value = 'light';
    },
    dark: (state) => {
      state.value = 'dark';
    },
  },
});

export const { light, dark } = slice.actions;

export const selectTheme = (state: { theme: { value: string } }) =>
  state.theme.value;

export default slice.reducer;
