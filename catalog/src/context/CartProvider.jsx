import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

// Create CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart with data from localStorage if available
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Save cart items to localStorage on change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  //for add product in cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Update quantity if item exists
        toast.success(`+1 "${product.title}" added to your cart.`);
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item to cart
        toast.success(`"${product.title}" added to your cart.`);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // for inc and dec quantity
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // for remove item from cart
  const removeFromCart = (productId, item) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    toast.success(`"${item.title}" has been removed from your cart.`);
  };

  // for clear all products in cart
  const clearCart = () => {
    setCartItems([]);
    toast.success("Your cart has been cleared");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
