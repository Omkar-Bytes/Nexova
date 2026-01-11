import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getCartKey = () => {
    const auth = localStorage.getItem("auth");
    if (!auth) return "cart_guest";

    try {
      const parsed = JSON.parse(auth);
      return parsed?.user?.id
        ? `cart_user_${parsed.user.id}`
        : "cart_guest";
    } catch {
      return "cart_guest";
    }
  };

  const [cartKey, setCartKey] = useState(getCartKey);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem(getCartKey());
    return saved ? JSON.parse(saved) : [];
  });

  // 🔁 SWITCH CART WHEN USER LOGS IN / OUT
  useEffect(() => {
    const newKey = getCartKey();
    setCartKey(newKey);

    const saved = localStorage.getItem(newKey);
    setCart(saved ? JSON.parse(saved) : []);
  }, []);

  // 💾 PERSIST CART
  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(quantity, 1) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(cartKey);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
