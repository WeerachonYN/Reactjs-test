import {
    FETCH_INVOID,
    INVOID_END,
    INVOID_ERROR,
    INVOID_START
} from './action.type'
const initialState ={
    loading:false,
    error:'',
    invoid:[],
}
export function invoidReducer(state=initialState,action){
   switch (action.type) {
       
       case FETCH_INVOID:
           console.log('FETCH_INVOID:',action.payload);
            return {
                ...state,
                invoid:action.payload
            }
            case INVOID_START:
                return {
                    ...state,
                    loading:true
                }
            case INVOID_END:
            return {
                ...state,
                loading:false
            }
            case INVOID_ERROR:
                return {
                    ...state,
                    error:action.payload
                }
       default:
           return state
   }
}