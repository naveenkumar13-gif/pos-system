import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orderId:'',
  customerName: "",
  customerPhone: "",
  guest: 0,
  tableNo: "",
};
export const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    setCustomer: (state, action) => {
      const { name, phone, guest } = action.payload;
      state.orderId = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      state.customerName = name;
      state.customerPhone = phone;
      state.guest = guest;
    },
    removeCustomer: (state) => {
      state.customerName = "";
      state.customerPhone = "";
      state.guest = 0;
    },
    updateTable: (state, action) => {
      state.tableNo = action.payload.tableNo;
    },
  },
});

export const { setCustomer, removeCustomer, updateTable } =
  customerSlice.actions;
export default customerSlice.reducer;
