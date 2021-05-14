import './App.css';
import Header from "./components/Layout/Header";
import {useEffect, useState} from "react";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const hideCartHandler = () => {
    setIsCartOpen(false);
  }

  const showCartHandler = () => {
    setIsCartOpen(true);
  }

  return (
    <CartContextProvider>
      <Header onShowCart={showCartHandler}/>
      {isCartOpen && <Cart onClose={hideCartHandler}/>}
      <main>
        <MealsSummary/>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;

