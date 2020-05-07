import CartActionsTypes from './cart.types'

const INTIAL_STATE = {
    hidden: true
};

const cartReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CartActionsTypes.ACCESS_CART:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default cartReducer;