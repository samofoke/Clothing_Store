import React from 'react';
import { connect } from 'react-redux';
import { CartHidden } from '../../redux/cart/cart.actions';
import { selectCount } from '../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';
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

const mapState = createStructuredSelector({
    itemCount: selectCount
});

export default connect(
    mapState, 
    mapDispatchToProps
)(CartIcon);