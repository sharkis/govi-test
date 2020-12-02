import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  greeting: string;
  deployed: boolean | string;
} = {
  greeting: '',
  deployed: '',
};

export const AppSlice = createSlice({
  name: 'AppSlice',
  initialState: initialState,
  reducers: {
    setGreeting: (state, action: PayloadAction<string>) => {
      state.greeting = action.payload;
    },
    setDeployed: (state, action: PayloadAction<string>) => {
      state.deployed = action.payload;
    },
  },
});
