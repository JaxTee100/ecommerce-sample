import { CART_ACTION_TYPES } from "./cart.types";




//this is the first thing to do when creating a reducer: you create the initial state object
export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
   

}

//now we create the reducer
export const cartReducer = (state=CART_INITIAL_STATE, action ={}) =>{
    const{type, payload} = action;




    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload
            };
            
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen: payload,
            }

            default:
                return state
    }
}