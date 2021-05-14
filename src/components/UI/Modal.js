import React, {Fragment} from 'react';
import classes from './Modal.module.css';
import {createPortal} from "react-dom";

const Backdrop = props => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}/>
  )
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      {props.children}
    </div>
  )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {createPortal(<ModalOverlay> {props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
