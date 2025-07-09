import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
