import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartAction } from "../store/CartReducer";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const totalQuantity = cart.reduce(
    (total, item) => total + parseInt(item.quantity, 10),
    0
  );

  const handleCartOpen = () => {
    dispatch(cartAction.setCartVisible());
  };

  return (
    <button className={classes.button} onClick={handleCartOpen}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
