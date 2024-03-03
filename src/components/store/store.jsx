import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartReducer";
import productSlice from "./ProductReducer";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
