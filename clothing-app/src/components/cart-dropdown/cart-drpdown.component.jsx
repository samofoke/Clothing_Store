import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import Cartitem from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className= 'cart-items'>
            {cartItems.length ? (
                cartItems.map(cartitem => (
                <Cartitem key={cartitem.id} item={cartitem}/>
                ))
                ): (
                <span className='empty'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>
            CHECKOUT
        </CustomButton>
    </div>
);

const mapSate = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapSate)(CartDropdown));