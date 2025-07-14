import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exitingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (exitingItem) {
        exitingItem.quantity++;
      }
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
     
  },
});
export const getTotalPrice = (state) => state.cart.reduce((total, item) => total + item.price, 0);
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice;
