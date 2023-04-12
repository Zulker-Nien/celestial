import { createSelector } from "reselect";

const selectCartReducer = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart: any) => cart && cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart: any) => cart && cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: any) => {
    if (!cartItems) {
      return 0;
    }
    return cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.quantity,
      0
    );
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    if (!cartItems) {
      return 0;
    }
    return cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.quantity * cartItem.price,
      0
    );
  }
);
