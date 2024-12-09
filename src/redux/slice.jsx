import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartData: [],
  totalPrice: []
};

const mySlice = createSlice({
  name: "quickMart",
  initialState,
  reducers: {
    allProducts: (state, action) => {
      state.products = action.payload;
      // console.log(state.products, "slice");
    },
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartData.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        state.cartData.push({ ...item, quantity: item.quantity || 1 });
      }
      // console.log(state.cartData, "Updated cartData");
    },
    removeFromCard: (state, action) => {
      const itemId = action.payload;
      state.cartData = state.cartData?.filter(item => item.id !== itemId);
      console.log(state.cartData, "updated cartData");
    },
    addActualPrice: (state, action) => {
      state.totalPrice = action.payload
      console.log(action.payload, "slice")
    }
  },
});

export const { allProducts, addToCart, removeFromCard, addActualPrice } = mySlice.actions;
export default mySlice.reducer;
