import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [countCart, setCountCart] = useState(0);
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    const getCart = localStorage.getItem('cart');
    if (getCart) {
      const tokenCart = JSON.parse(getCart);
      setProductCart(tokenCart);
      setCountCart(tokenCart.length);
    }
  }, []);

  const updateCart = newCart => {
    setProductCart(newCart);
    setCountCart(newCart.length);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ countCart, productCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
