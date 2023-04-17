import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./CartAction";
import { CartItem } from "./CartTypes";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload as boolean,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload as CartItem[],
    };
  }
  return state;
};
