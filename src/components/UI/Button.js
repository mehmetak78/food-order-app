import React from 'react';
import classes from './css/Button.module.css';
//TODO: Add SCSS to other css styles.
const Button = (props) => {
  let className  =classes.btn;

  switch (props.styletype) {
    case 'btn1' : default:  className = `${className} ${classes.btn1} `;break;
    case 'btn2' : className = `${className} ${classes.btn2} `;break;
    case 'btn3' : className = `${className} ${classes.btn3} `;break;
  }

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

