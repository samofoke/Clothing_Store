export const addItemToCart = (cartItems, cartAdd) => {
    const existItem = cartItems.find(
        cartItem => cartItem.id === cartAdd.id
    );

    if (existItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartAdd, quantity: 1}]
};