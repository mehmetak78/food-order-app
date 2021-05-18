import React, {Fragment, useContext, useState} from 'react';
import classes from './Cart.module.css'
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import FormCheckout from "./FormCheckout";

const Cart = (props) => {

  const cartContext = useContext(CartContext);
  const [isCheckoutFormOpen, setIsCheckoutFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartItemRemoveHandler = id => {
    cartContext.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount: 1})
  }

  const orderClickHandler = () => {
    setIsCheckoutFormOpen(true)
  }


  const sendOrder = async (userData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://react-http-92123-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
                               user: userData,
                               orderItems: cartContext.items
                             })
      });
      if (!response.ok || response.status !== 200) {
        throw  new Error('Cannot send data to the server')
      }
      const data = await response.json();
      setDidSubmit(true);
      cartContext.clearCart();

    } catch (e) {
      console.log('Error')
    } finally {
      setIsSubmitting(false);
    }
  }

  const submitOrderHandler = (userData) => {
    console.log(userData);
    sendOrder(userData)
  }

  const cartItems =
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) =>
                               <CartItem key={item.id} item={item}
                                         onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                         onAdd={cartItemAddHandler.bind(null, item)}
                               />)}
    </ul>

  const modalActions =
    <div className={classes.actions}>
      <Button styleType={'btn2'} onClick={props.onClose}>Close</Button>
      {cartContext.items.length > 0 && <Button onClick={orderClickHandler}>Order</Button>}
    </div>

  const cartModalContent =
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartContext.totalAmount.toFixed(2)}</span>
      </div>
      {!isCheckoutFormOpen && modalActions}
      {isCheckoutFormOpen && <FormCheckout onSubmit={submitOrderHandler} onClose={props.onClose}/>}
    </Fragment>

  const submittingModalContent = <p> Submitting Order Data...</p>

  const ssubmittedModalContent = <Fragment>
    <p> Successfully Sent Order Data...</p>
    <div className={classes.actions}>
      <Button onClick={props.onClose}>Close</Button>
    </div>
  </Fragment>

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && submittingModalContent}
      {!isSubmitting && didSubmit && ssubmittedModalContent}
    </Modal>
  );
};

export default Cart;
