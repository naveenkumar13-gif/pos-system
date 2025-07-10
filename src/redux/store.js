import { configureStore } from "@reduxjs/toolkit";
import { customerSlice } from "./customerSlice";

const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
  },
});

export default store;
