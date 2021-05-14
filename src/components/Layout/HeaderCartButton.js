import React, {useContext, useEffect, useState} from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartContext = useContext(CartContext);

  const {items} = cartContext;

  const numberOfItems = items.reduce(
    (currentNumber, item) => currentNumber + item.amount, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump:''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout( () => {
      setBtnIsHighlighted(false)
    }, 300)

  return () => {
    clearTimeout(timer)
  }

  }, [items]);
  

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}> {numberOfItems} </span>
    </button>
  );

};

export default HeaderCartButton;


