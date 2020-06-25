import CartActionsTypes from './cart.types'

const INTIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CartActionsTypes.ACCESS_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.playload]
            }
        default:
            return state;
    }
};

export default cartReducer;