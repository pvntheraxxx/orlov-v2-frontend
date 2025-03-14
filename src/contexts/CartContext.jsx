import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Генерация уникального ID

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, uniqueId: uuidv4() }]);
  };

  const removeFromCart = (uniqueId) => {
    setCartItems((prev) => {
      const indexToRemove = prev.findIndex(
        (item) => item.uniqueId === uniqueId
      );
      if (indexToRemove !== -1) {
        return [
          ...prev.slice(0, indexToRemove),
          ...prev.slice(indexToRemove + 1),
        ];
      }
      return prev;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
