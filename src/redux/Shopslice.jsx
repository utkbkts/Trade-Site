import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productdata: [],
  userInfo: null,
  isLoading:false
};

export const Shopslice = createSlice({
  name: "Shopslice",
  initialState,
  reducers: {
    reset: (state, action) => {
      const item = state.productdata.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productdata.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productdata = state.productdata.filter(
        (item) => item._id !== action.payload
      );
    },
    resetcart: (state) => {
      state.productdata = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.productdata.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementquantity: (state, action) => {
      const item = state.productdata.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeuser: (state, action) => {
      state.userInfo = null;
    },
    adduser: (state, action) => {
      state.userInfo = action.payload;
    },
    isLoading:(state,action)=>{
      state.isLoading=action.payload
    }
  },
});

export const {
  reset,
  deleteItem,
  resetcart,
  incrementQuantity,
  decrementquantity,
  removeuser,
  adduser,
  isLoading
} = Shopslice.actions;
export default Shopslice.reducer;
