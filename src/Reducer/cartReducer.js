
import {ADD_TO_CART,DELETE_CART} from '../actions/cart/cartActions'
const initialState =[]
export function cartReducer(state=initialState,action){
   switch (action.type) {
       case ADD_TO_CART:

           let updatedState = [...state,action.payload]
            //# หาไอเท็มที่มีอยู่ใน ตะกร้า
           const foundItem = state.find(item => item.id === action.payload.id)
            //    #หาว่ามีไอเท็มเดิมอยู่ใน ตะกร้า หรือยัง
           if(!foundItem){
              updatedState = [...state, action.payload]
           }else 
           //# มีอยู่ใน ตะกร้าแล้ว เพิ่ม quantity แทน
           {
          updatedState =  state.map(item => ({
                 ...item,
                 quantity: item.id === foundItem.id ? item.quantity + 1:item.quantity,
                 
             }))  
           }

        //    localStorage.setItem('quantity')
            return updatedState
        case DELETE_CART:
            return state.filter(item => item.id !== action.payload)
            
       default:
           return state
   }
}
// export default addToCart