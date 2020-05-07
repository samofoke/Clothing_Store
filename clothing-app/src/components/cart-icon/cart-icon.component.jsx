import React from 'react';
import { connect } from 'react-redux';
import { CartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/business.svg'
import './cart-icon.style.scss';

const CartIcon = ({CartHidden}) => (
    <div className='cart-icon' onClick={CartHidden}>
        <ShoppingIcon className='shop-icon' />
        <span className='item-icon'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    CartHidden: () => dispatch(CartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);