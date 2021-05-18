import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  let className  =classes.btn;

  switch (props.styleType) {
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

