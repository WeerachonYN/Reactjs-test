import {
    CATEGORY_START,
    CATEGORY_ERROR,
    CATEGORY_END,
    FETCH_CATEGORY,
} from './action.type'
const initialState ={
    data:null,
    dataAll:[],
    loading:false,
    error:'',
}
export function categoryReducer(state=initialState,action){
   switch (action.type) {
       case FETCH_CATEGORY:
            return {
                ...state,
                dataAll:action.payload
            }
            case CATEGORY_START:
                return {
                    ...state,
                    loading:true
                }
            case CATEGORY_END:
            return {
                ...state,
                loading:false
            }
            case CATEGORY_ERROR:
                return {
                    ...state,
                    error:action.payload
                }
       default:
           return state
   }
}