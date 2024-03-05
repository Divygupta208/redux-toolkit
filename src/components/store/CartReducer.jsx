import { createAction, createSlice } from "@reduxjs/toolkit";
import { uiAction } from "./ui-slice";

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

    setInitialCart: (state, action) => {
      state.cart = action.payload;
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        message: "Data Sending",
        title: "Loading...",
      })
    );

    const sendReq = async () => {
      const response = await fetch(
        "https://react-http-7951f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: { "Content-Type": "application/json" },
        }
      );
    };

    try {
      await sendReq();
      dispatch(
        uiAction.showNotification({
          status: "success",
          message: "Data sent successfully",
          title: "Success",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          message: "Data rejected",
          title: "Error",
        })
      );
    }
  };
};
//get
export const getCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        message: "Data Sending",
        title: "Loading...",
      })
    );

    try {
      const response = await fetch(
        "https://react-http-7951f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      dispatch(cartAction.setInitialCart(data));

      dispatch(
        uiAction.showNotification({
          status: "success",
          message: "Data sent successfully",
          title: "Success",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          message: "Data rejected",
          title: "Error",
        })
      );
    }
  };
};

export const cartAction = cartSlice.actions;

export default cartSlice;
