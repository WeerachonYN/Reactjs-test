import axios from "axios"
import { put} from "@redux-saga/core/effects"
import { call } from "redux-saga/effects"
import { authUser } from "../../api/fetchLogin"
import { FETCH_PRODUCT_ALL_REQ,FETCH_CART,AUTH_START,AUTH_ERROR,AUTH_END,SET_AUTH ,FETCH_LOGIN_CART_REQ, FETCH_CATEGORY_REQ, FETCH_INVOID_REQ} from "../Reducer/action.type"
export function* fetchAuthAsync({payload}){
            yield put({type:AUTH_START})
        try{
            const responses = yield call(authUser,payload);
            const response = responses.data
            yield put({type:SET_AUTH,payload:response})
            yield put({type:FETCH_LOGIN_CART_REQ,payload:response})
            yield put({type:AUTH_ERROR,payload:null})
            yield put({type:FETCH_CATEGORY_REQ})
            yield put({type:FETCH_PRODUCT_ALL_REQ})
            yield put({type:FETCH_INVOID_REQ,token:response})
            yield put({type:AUTH_END})
        } catch(error){
          yield put({type:SET_AUTH,payload:null})
          yield put({type:AUTH_ERROR,payload:error.response?.data || error})
          yield put({type:AUTH_END})
        }   
   
}