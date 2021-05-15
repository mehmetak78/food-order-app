import React, {useReducer} from 'react';
import CartContext from "./CartContext";

const ACTION_TYPES = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

const cartReducer = (state, action) => {
  switch (action.type)  {
    case ACTION_TYPES.ADD: {
      const existingCartItemIndex = state.items.findIndex( (item) => item.id === action.payload.id);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount
        }
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      else {
        updatedItems = [...state.items, action.payload]
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.payload.price * action.payload.amount
      }
    }
    case ACTION_TYPES.REMOVE: {
      const existingCartItemIndex = state.items.findIndex( (item) => item.id === action.payload);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.payload);
      }
      else {
        const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount - existingCartItem.price
      }
    }
    default:
      return state;
  }
}

const CartContextProvider = (props) => {
  const initialState = {
    items: [],
    totalAmount: 0
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = item => {
    dispatch({type: ACTION_TYPES.ADD, payload:item});
  };

  const removeItemFromCartHandler = id => {
    dispatch({type: ACTION_TYPES.REMOVE, payload:id})
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
