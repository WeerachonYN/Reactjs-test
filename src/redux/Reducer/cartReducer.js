
import {
    CART_START,
    CART_END,
    CART_ERROR,
    FETCH_CART,
    DELETE_CART,
} from './action.type'
const initialState = {
    cart:[],
    loading:false,
    error:''
}
export function cartReducer(state=initialState,action){
    
   switch (action.type) {
    //    case ADD_TO_CART:
        //    console.log('State:',state);
        // let updatedState
        //    const foundItem = state?.cart||state.find(item => item.id === action.payload.id)
           
        //     if(!foundItem){
        //         updatedState = [...state?.cart||state, action.payload]
        //     }else{
        //         updatedState = state?.cart||state.map(item =>({
        //             ...item,quantity:item.id === foundItem.id?action.payload.quantity:item.quantity
        //         }))
        //    }
        // //    localStorage.setItem('quantity')
        //     return updatedState
        case CART_START:
            return {
                ...state,
                loading:true
            }
        case CART_END:
        return {
            ...state,
            loading:false
        }
        case CART_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case FETCH_CART:
            console.log('FETCH_CART:',action.payload);
            return  {...state,
                        cart:action.payload}

        // case DELETE_CART:
        //     return state.filter(item => item.id !== action.payload)
            
       default:
           return state
   }
}
// export default addToCart