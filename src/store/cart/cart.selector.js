import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0)
);

// // Generate new cart count
// const newCartCount = newCartItems.reduce((total, cartItem) => {
//   return total + cartItem.quantity;
// }, 0);

// // Generate new cart total
// const newCartTotal = newCartItems.reduce((total, cartItem) => {
//   return total + cartItem.quantity * cartItem.price;
// }, 0);
