import axios from "axios"
import { startFetch,endFetch,errorFetch } from "./statusActions"

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
            console.log('Response:',response);

            // localStorage.setItem('token_access',JSON.stringify(response.data))
          
          }).catch((error) => {
            console.log('ERROR:',error.response.data ); 
            dispatch(setAuth(null))
            dispatch(errorFetch(error.response?.data || error))
            dispatch(endFetch())
          })
    }
}