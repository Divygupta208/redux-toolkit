import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { getCartData } from "../store/CartReducer";

const Cart = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const cart = useSelector((state) => state.cart.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((cartItem) => (
          <CartItem item={cartItem} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
