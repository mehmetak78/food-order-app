import React from 'react';
import useInput from "../../hooks/useInput";
import classes from './FormCheckout.module.css';
import Button from "../UI/Button";

const FormCheckout = (props) => {
  const name = useInput((value) => value.trim() !== '')

  const nameClasses = name.hasError ? `${classes['form-control']} {classes.invalid}` : classes['form-control'];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted')
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
      </div>
      <div className={classes["form-actions"]}>
        <Button styleType = 'btn2' type='button'>Cancel</Button>
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default FormCheckout;
