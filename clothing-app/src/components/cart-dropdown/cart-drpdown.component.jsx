import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Cartitem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className= 'cart-items'>
            {
                cartItems.map(cartitem => (
                <Cartitem key={cartitem.id} item={cartitem}
                />))
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const mapSate = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapSate)(CartDropdown);