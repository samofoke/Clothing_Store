import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/business.svg'
import './cart-icon.style.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shop-icon' />
        <span className='item-icon'>0</span>
    </div>
);

export default CartIcon;