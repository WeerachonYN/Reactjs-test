import axios from "axios"
import { startFetch,endFetch,errorFetch } from "./statusActions"
export const GET_DATA = 'GET_DATA'


export function getData(product){
    return{
        type:GET_DATA,
        payload:product,
    }
}
export function fetchProductAsync(paramsId){
    return async function(dispatch){
      try{ 
        //   dispatch(startFetch())
            const product =  await axios.get(`/product/${paramsId}/`)
            // console.log('type of price :',typeof(product.data.data[0].price));
            dispatch(getData(product.data.data))
            // dispatch(errorFetch(''))
            // dispatch(endFetch())
            // localStorage.setItem('product',JSON.stringify(product.data.data));
   
        }
        catch(error){
          dispatch(getData(null))
        //   dispatch(errorFetch(error))
        //   dispatch(endFetch())
        }
    }
}