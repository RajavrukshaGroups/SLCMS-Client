import { configureStore } from "@reduxjs/toolkit";
import admissionReducer from "./admissionSlice";

export const store = configureStore({
  reducer: {
    admission: admissionReducer,
  },
});
