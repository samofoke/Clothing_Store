import CartActionsTypes from './cart.types';

export const CartHidden = () => ({
    type: CartActionsTypes.ACCESS_CART
});

export const addItem = item => ({
    type: CartActionsTypes.ADD_ITEM,
    payload: item
});