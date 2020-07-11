import React from 'react';
import { connect } from 'react-redux';
import { CartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/business.svg'
import './cart-icon.style.scss';

const CartIcon = ({CartHidden, itemCount}) => (
    <div className='cart-icon' onClick={CartHidden}>
        <ShoppingIcon className='shop-icon' />
        <span className='item-icon'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    CartHidden: () => dispatch(CartHidden())
});

const mapState = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce(
        (accumalteSum, cartItem) => accumalteSum + cartItem.quantity, 0)
})

export default connect(
    mapState, 
    mapDispatchToProps
)(CartIcon);