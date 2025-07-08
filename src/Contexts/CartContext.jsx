import React, { createContext, useContext, useEffect, useState } from "react";

export const cartContext = createContext(null);

export default function CartContextProvider({ children }) {

  const savedCart = JSON.parse(localStorage.getItem("cartArr")) || [];

  const [searchedValue, setSearchedValue] = useState("");
  const [cart, setCart] = useState(savedCart);
  const totalItems = cart.reduce((acc, { quantity }) => acc + quantity, 0);
  console.log();

  const addToCart = (product_id) => {
    const existingCard = cart.find(
      ({ productId }) => productId === product_id
    ) ?? { productId: product_id, quantity: 0 };
    if (existingCard.quantity == 3) {
      alert("This seller has a limit of 3 per customer.");
    } else {
      existingCard.quantity += 1;
      console.log("existingCard : ", existingCard);
      if (existingCard.quantity === 1) setCart([...cart, existingCard]);
      if (existingCard.quantity > 1) setCart([...cart]);
    }
    
  };

  useEffect( () => {
    localStorage.setItem("cartArr", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (product_id) => {
    const cartToRemove = cart.find(({ productId }) => productId === product_id);

    console.log("cartToRemove : ", cartToRemove);
    if (cartToRemove.quantity === 1) {
      setCart(cart.filter(({ productId }) => productId !== product_id));
    } else {
      cartToRemove.quantity -= 1;
      setCart([...cart]);
    }
  };
  const deleteFromCart = (product_id) => {
    setCart(cart.filter(({productId}) => productId !== product_id));
  }

  function handleBuy() {
    setCart([]);
  }

  console.log("cart : ", cart);

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        totalItems,
        removeFromCart,
        searchedValue,
        setSearchedValue,
        deleteFromCart,
        handleBuy
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
