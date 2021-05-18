import React from 'react';
import classes from './CartItem.module.css'
import Button from "../UI/Button";

const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <Button styleType='btn3' onClick={props.onRemove}>-</Button>
        <Button styleType='btn3' onClick={props.onAdd}>+</Button>
      </div>
    </li>
  );
};

export default CartItem;
