import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./slice";

const store = configureStore({
  reducer: {
    quickMart: mySlice,
  },
});
export default store;
