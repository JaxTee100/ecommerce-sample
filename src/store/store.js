
import { compose, applyMiddleware, createStore } from "redux";




import { rootReducer } from "./root-reducer";




const loggerMiddleWare = (store) => (next) => (action) =>{
    if(!action.type){
        console.log("this is action type", action.type)
        return next(action);
    }
    console.log("this is action type2", action.type)
    console.log('type: ', action.type);
    console.log('type: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);
    console.log('next state', store.getState())
}

//root reducer


const middleWares = [loggerMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers);
