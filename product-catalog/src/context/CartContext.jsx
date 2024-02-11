import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setAddedToCart((prev) => ({ ...prev, [item.id]: true }));
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    setAddedToCart(false);
  };

  const countCart = () => {
    return cartItems.length;
  };

  const setQuantityForItem = (itemId, itemQuantity) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [itemId]: itemQuantity,
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addedToCart,
        quantity,
        countCart,
        setAddedToCart,
        addToCart,
        removeFromCart,
        setQuantity: setQuantityForItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
