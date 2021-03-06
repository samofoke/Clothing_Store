import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { auth } from '../../FireBase/firebaseutil';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/AlloTech4.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCartHidden } from '../../redux/cart/selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import CartDropdown from '../cart-dropdown/cart-drpdown.component';
import './header.style.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                ): (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
                )
            }
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
