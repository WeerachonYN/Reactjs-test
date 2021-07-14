import axios from "axios"
import { startFetch,endFetch,errorFetch } from "../statusActions"
export const SET_AUTH = 'SET_AUTH'


export function setAuth(user){
    return{
        type:SET_AUTH,
        payload:user,
    }
}
export function fetchAuthAsync(data){
    return async function(dispatch){
            dispatch(startFetch())
            axios.post('/token/',data)
          .then((response) => {
            dispatch(setAuth(response))
            dispatch(errorFetch(''))
            dispatch(endFetch())
            console.log(response);
          }).catch((error) => {
            dispatch(setAuth(null))
            dispatch(errorFetch(error))
            dispatch(endFetch())
            console.error(error); 
          })
    }
}