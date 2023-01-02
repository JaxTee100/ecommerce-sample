import { USER_ACTION_TYPES } from "./user.types";
//this is the initial state
const INITIAL_STATE = {
    currentUser: null
}


//this is a reducer for the user. it takes in the initial state and manipulates it with the action
export const userReducer = (state=INITIAL_STATE, action) => {
   
    const {type, payload} = action

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        default:
            return state;

    }
}


