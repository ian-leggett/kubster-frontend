import { createSlice } from '@reduxjs/toolkit';
export interface IprofileState {
  name: null | string;
}

const initialState: IprofileState = {
  name: null
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileState: (state) => {
      state.name = 'moo';
    }
  }
});

export const { getProfileState } = profileSlice.actions;
export default profileSlice.reducer;
