import React from 'react';
import useInput from "../../hooks/useInput";
import classes from './FormCheckout.module.css';
import Button from "../UI/Button";

const FormCheckout = (props) => {
  const name = useInput((value) => value.trim() !== '')
  const street = useInput((value) => value.trim() !== '')
  const postalCode = useInput((value) => value.trim() !== '')
  const city = useInput((value) => value.trim() !== '')

  const nameClasses = name.hasError ? `${classes['form-control']} {classes.invalid}` : classes['form-control'];
  const streetClasses = name.hasError ? `${classes['form-control']} {classes.invalid}` : classes['form-control'];
  const postalCodeClasses = name.hasError ? `${classes['form-control']} {classes.invalid}` : classes['form-control'];
  const cityClasses = name.hasError ? `${classes['form-control']} {classes.invalid}` : classes['form-control'];



  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: name.value,
      street: street.value,
      postalCode: postalCode.value,
      city: city.value
    }
    props.onSubmit(userData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes['control-group']}>
        <div className={nameClasses}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            value={name.value}
            onChange={name.changeHandler}
            onBlur={name.blurHandler}
          />
          {name.hasError && <p className={classes["error-text"]}>Please enter a valid name.</p>}
        </div>
        <div className={streetClasses}>
          <label htmlFor='street'>Street</label>
          <input
            type='text'
            id='street'
            value={street.value}
            onChange={street.changeHandler}
            onBlur={street.blurHandler}
          />
          {street.hasError && <p className={classes["error-text"]}>Please enter a valid street name.</p>}
        </div>
        <div className={postalCodeClasses}>
          <label htmlFor='postalCode'>Postal Code</label>
          <input
            type='text'
            id='postalCode'
            value={postalCode.value}
            onChange={postalCode.changeHandler}
            onBlur={postalCode.blurHandler}
          />
          {postalCode.hasError && <p className={classes["error-text"]}>Please enter a valid postal codde.</p>}
        </div>
        <div className={cityClasses}>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            id='city'
            value={city.value}
            onChange={city.changeHandler}
            onBlur={city.blurHandler}
          />
          {city.hasError && <p className={classes["error-text"]}>Please enter a valid city name.</p>}
        </div>
      </div>
      <div className={classes["form-actions"]}>
        <Button styleType = 'btn2' type='button' onClick={props.onClose}>Cancel</Button>
        <Button>Confirm</Button>
      </div>
    </form>
  );
};

export default FormCheckout;
