import {
    SET_AUTH,
    AUTH_START,
    AUTH_END,
    AUTH_ERROR,
    GET_USER,
} from './action.type'
const initialState ={
    token:null,
    user:null,
    loading:false,
    time:null,
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
            return {
                ...state,
                token:action.payload,
                time:(Date.now()/1000)+action.payload.expires_in
            }
        case GET_USER:
                return {
                    ...state,
                    user:action.payload,
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