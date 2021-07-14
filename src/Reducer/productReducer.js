import {GET_DATA} from '../actions/product/productAction'
const initialState ={
    data:null
}
export function productReducer(state=initialState,action){
   switch (action.type) {
       case GET_DATA:
           console.log('GET_DATA');
            return {
                data:action.payload
            }
               
       default:
           return state
   }
}