import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import { statusReducer } from "./statusReducer";
import { productReducer } from "./productReducer";
 // defaults to localStorage for web

  
const rootReducer = combineReducers({
    cart:cartReducer,
    auth:authReducer,
    status:statusReducer,
    product:productReducer,
})
export default rootReducer