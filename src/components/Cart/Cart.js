import React, {useContext} from 'react';
import classes from './Cart.module.css'
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {

  const cartContext = useContext(CartContext);

  const cartItemRemoveHandler = id => {
    cartContext.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount:1})
  }

  const cartItems =
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) =>
                               <CartItem key={item.id} item={item}
                                         onRemove={cartItemRemoveHandler.bind(null,item.id)}
                                         onAdd={cartItemAddHandler.bind(null,item)}
                               />)}
    </ul>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <Button buttontype={'btn2'} onClick={props.onClose}>Close</Button>
        {cartContext.items.length > 0 && <Button>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;
