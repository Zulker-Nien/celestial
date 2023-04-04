import { createContext, useEffect, useState } from "react";

interface ICartContext {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: any[];
  addItemToCart: React.Dispatch<React.SetStateAction<any>>;
  cartCount: number;
  removeItemToCart: React.Dispatch<React.SetStateAction<any>>;
  clearItemFromCart: React.Dispatch<React.SetStateAction<any>>;
  cartTotal: number;
}

const addCartItem = (cartItems: any, productToAdd: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCardItem = (cartItems: any, cartItemToRemove: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem: { id: any }) => cartItem.id !== cartItemToRemove.id
    );
  }
  return cartItems.map((cartItem: any) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: any, cartItemToClear: any) =>
  cartItems.filter(
    (cartItem: { id: any }) => cartItem.id !== cartItemToClear.id
  );

export const CartContext = createContext<ICartContext>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  clearItemFromCart: () => {},
  removeItemToCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }: any) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd: any) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove: any) => {
    setCartItems(removeCardItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToRemove: any) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
