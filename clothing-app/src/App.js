import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import SigninAndSignup from './pages/signin-signup/signin-signup.component';
import Header from './components/header/header.component';
import checkoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfile } from './FireBase/firebaseutil';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubcribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={checkoutPage}/>
          <Route
          exact
          path='/signin'
          render={() =>
            this.props.currentUser ? (
            <Redirect to='/' />
            ) : (
            <SigninAndSignup/>
            )
          }
          />
        </Switch>
      </div>
    );
  };
}

const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateProps, mapDispatchToProps)(App);
