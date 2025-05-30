import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext(null);

export default function CartContextProvider({ children }) {
  const [searchedValue, setSearchedValue] = useState("");
  const [cart, setCart] = useState([]);
  const totalItems = cart.reduce((acc, { quantity }) => acc + quantity, 0);
  console.log();

  const addToCart = (product_id) => {
    const existingCard = cart.find(
      ({ productId }) => productId === product_id
    ) ?? { productId: product_id, quantity: 0 };
    existingCard.quantity += 1;
    console.log("existingCard : ", existingCard);
    if (existingCard.quantity === 1) setCart([...cart, existingCard]);
    if(existingCard.quantity > 1) setCart([...cart]);
  };

  const removeFromCart = (product_id) => {
    const cartToRemove = cart.find(({productId}) => productId === product_id);

    console.log("cartToRemove : ", cartToRemove)
    if(cartToRemove.quantity === 1) {
        setCart(cart.filter(({productId}) => productId !== product_id))
    }
    else {
        cartToRemove.quantity -= 1;
        setCart([...cart]);
    }

  }

  console.log("cart : ", cart);

  return (
    <cartContext.Provider value={{ cart, addToCart, totalItems, removeFromCart, searchedValue, setSearchedValue }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
