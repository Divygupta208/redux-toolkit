import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: Math.random(),
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: Math.random(),
    title: "Test-2",
    price: 6,
    description: "This is a first product - amazing!",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: products,
  },

  reducers: {
    addProducts(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice;
