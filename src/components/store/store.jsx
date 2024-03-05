import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartReducer";
import productSlice from "./ProductReducer";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
