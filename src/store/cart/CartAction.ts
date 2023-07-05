import { CategoryItem } from "../categories/CategoryTypes";
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/reducer/Reducer";
import { CART_ACTION_TYPES, CartItem } from "./CartTypes";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  if (!Array.isArray(cartItems)) {
    return cartItems;
  }

  if (!productToAdd || !productToAdd.id) {
    return cartItems;
  }

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCardItem = (
  cartItems: CartItem[] = [],
  cartItemToRemove: CartItem
): CartItem[] => {
  if (!cartItems.length) {
    console.log("Error: cart is empty");
    return cartItems;
  }
  if (!cartItemToRemove.id) {
    console.log("Error: invalid cart item to remove");
    return cartItems;
  }
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear?: CartItem
): CartItem[] => {
  if (!cartItemToClear) {
    return cartItems;
  }
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = withMatcher(
  (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
  }
);
export const removeItemFromCart = withMatcher(
  (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCardItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
  }
);
export const clearItemFromCart = withMatcher(
  (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
  }
);
