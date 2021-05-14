import React, {useContext} from 'react';
import classes from './Meal.module.css'
import MealForm from "./MealForm";
import CartContext from "../../store/CartContext";

const Meal = (props) => {

  const cartContext = useContext(CartContext);

  const price = `$${props.meal.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartContext.addItem({
                          id: props.meal.id,
                          name: props.meal.name,
                          amount: amount,
                          price: props.meal.price
                        })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm id={props.meal.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default Meal;
