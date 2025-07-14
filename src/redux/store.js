import { configureStore } from "@reduxjs/toolkit";
import  customerSlice  from "./customerSlice";
import  cartSlice  from "./cartSlice/index";

const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
