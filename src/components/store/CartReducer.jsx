import { createAction, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartVisible: false,
  },

  reducers: {
    setCartVisible(state, action) {
      state.cartVisible = !state.cartVisible;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }
    },

    reduceQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== itemId);
        }
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cart.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 0) {
          existingItem.quantity += 1;
        }
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
