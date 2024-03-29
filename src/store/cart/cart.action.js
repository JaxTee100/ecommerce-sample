import { createAction } from "../../utils/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";


//utility functions that aids the helper function
const addCartItem = (cartItems, productToAdd) =>{
    //find if card items contains product to add
    const existingCartItem = cartItems.find(
        (cardItem) => cardItem.id === productToAdd.id
    )

    //if found increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        );
    }
  

    //return new array with modified cartItems/ new cart items
    return [...cartItems, {...productToAdd, quantity: 1}]
    
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find(
        (cardItem) => cardItem.id === cartItemToRemove.id
    );



    //check if quantity is equal to 1, if it is remove that item from the cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }


    //return back the cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) => 
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1} 
            : cartItem
        );
}

const clearCartItem = (cartItems,cartItemToClear ) =>{
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}


export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)



//helper functions
export const addItemToCart = (cartItems, productToAdd) =>{
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) =>{
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) =>{
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}