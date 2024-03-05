import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect, useState } from "react";
import Notification from "./components/UI/Network";
import { uiAction } from "./components/store/ui-slice";

function App() {
  const cartVisible = useSelector((state) => state.cart.cartVisible);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        message: "Data Sending",
        title: "Loading...",
      })
    );

    const sendCartData = async () => {
      const response = await fetch(
        "https://react-http-7951f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: { "Content-Type": "application/json" },
        }
      );

      dispatch(
        uiAction.showNotification({
          status: "success",
          message: "Data sent successfully",
          title: "Success",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        uiAction.showNotification({
          status: "error",
          message: "Data rejected",
          title: "Error",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Layout>
      <Notification notification={notification} />
      {cartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
