import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Cartitem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/selectors';
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

const mapSate = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapSate)(CartDropdown);