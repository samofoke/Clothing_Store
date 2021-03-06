import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
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
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumalteSum, cartItem) => 
        accumalteSum + cartItem.quantity * cartItem.price, 
        0
    )

)