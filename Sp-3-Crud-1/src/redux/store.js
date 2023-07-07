import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"


const rootReducer = combineReducers({productReducer,authReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));



