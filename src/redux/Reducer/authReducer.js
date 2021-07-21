import {
    SET_AUTH,
    AUTH_START,
    AUTH_END,
    AUTH_ERROR,
} from './action.type'
const initialState ={
    token:null,
    loading:false,
    error:''
}
export function authReducer(state=initialState,action){
   switch (action.type) {
        case AUTH_START:
           
        return {
            ...state,
            loading:true
        }
       case SET_AUTH:
        console.log('FETCH_AUTH:',action.payload);
            return {
                ...state,
                token:action.payload,
            }
            
        case AUTH_END:
        return {
            ...state,
            loading:false
        }
        case AUTH_ERROR:
            return {
                ...state,
                error:action.payload,
            }    
       default:
           return state
   }
}
// export default addToCart