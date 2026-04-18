import { configureStore, createSlice } from '@reduxjs/toolkit';

const admissionSlice = createSlice({
  name: 'admission',
  initialState: {
    step1: {},
    step2: {}
  },
  reducers: {
    setStep1: (state, action) => { state.step1 = action.payload; },
    setStep2: (state, action) => { state.step2 = action.payload; }
  }
});

export const { setStep1, setStep2 } = admissionSlice.actions;

export const store = configureStore({
  reducer: {
    admission: admissionSlice.reducer
  }
});
