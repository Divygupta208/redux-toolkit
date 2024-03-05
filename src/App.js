import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect, useState } from "react";
import Notification from "./components/UI/Network";

import { getCartData, sendCartData } from "./components/store/CartReducer";
let isInitial = true;

function App() {
  const cartVisible = useSelector((state) => state.cart.cartVisible);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Layout>
      {!isInitial && <Notification notification={notification} />}
      {cartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
