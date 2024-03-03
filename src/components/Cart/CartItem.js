import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { cartAction } from "../store/CartReducer";

const CartItem = (props) => {
  const { title, quantity, price } = props.item;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce(
    (sum, item) => (sum = item.price * item.quantity),
    0
  );

  const reduceQuantity = () => {
    dispatch(cartAction.reduceQuantity(props.item.id));
  };
  const increaseQuantity = () => {
    dispatch(cartAction.increaseQuantity(props.item.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={reduceQuantity}>-</button>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
