import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);
//creating a reusable selector

export const selectCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumalteSum, cartItem) => 
        accumalteSum + cartItem.quantity, 
        0
    )
)