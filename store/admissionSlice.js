import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step1: {},
  step2: {},
};

const admissionSlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    saveStep1: (state, action) => {
      state.step1 = action.payload;
    },
    saveStep2: (state, action) => {
      state.step2 = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { saveStep1, saveStep2, resetForm } = admissionSlice.actions;
export default admissionSlice.reducer;
