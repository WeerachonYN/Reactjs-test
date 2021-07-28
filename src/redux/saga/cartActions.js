import{put} from 'redux-saga/effects'
import { call } from '@redux-saga/core/effects';
import { DeleteCart,UpdateCart, fetchCart,fetchLoginCart } from '../../api/fetchCart';
import { DELETE_CART,CART_END, CART_ERROR, CART_START ,FETCH_LOGIN_CART_REQ,FETCH_CART} from '../Reducer/action.type';
// #actionCreator
export function* fetchCartAsync({payload,token}){
    
    try{
        // yield put({type:CART_START})
        yield call(fetchCart,{payload,token});
        // yield console.log('FETCH_CART_RESPONSE:',responses?.data);
        yield put({type:CART_ERROR,payload:null})
        yield put({type:FETCH_LOGIN_CART_REQ,payload:token})
        // yield put({type:CART_END})
    } catch(error){
        // yield console.log('ERROR CART_FETCH',error.response);
      yield put({type:CART_ERROR,payload:error.response?.data || error})
        
    //   yield put({type:CART_END})
    }  
    

}

export function* deleteCart({payload,token}){
    // yield console.log('DELETE_CART_pk:',payload);
    try{
        yield put({type:CART_START})
        let responses = yield call(DeleteCart,{payload,token});
        // yield console.log('DELETE_CART_RESPONSE:',responses);
        yield put({type:FETCH_LOGIN_CART_REQ,payload:token});
        yield put({type:CART_ERROR,payload:null})
        yield put({type:CART_END})
    } catch(error){
        // yield put({ type:FETCH_LOGIN_CART_REQ,payload:null})
      yield put({type:CART_ERROR,payload:error.response?.data || error})
      yield put({type:CART_END})
    }   
}
export function* updateCart({payload,token}){
    // yield console.log('Payload Update:',payload);
    try{
        yield put({type:CART_START})
        let responses = yield call(UpdateCart,{payload,token});
        // yield console.log('DELETE_CART_RESPONSE:',responses);
        yield put({type:FETCH_LOGIN_CART_REQ,payload:token});
        yield put({type:CART_ERROR,payload:null})
        yield put({type:CART_END})
    } catch(error){
        // yield put({ type:FETCH_LOGIN_CART_REQ,payload:null})
      yield put({type:CART_ERROR,payload:error.response?.data || error})
      yield put({type:CART_END})
      
    }   
}

export function* fetchOnLogin({payload}) {
    // console.log('FETCH_LOGIN_CART:',payload);
    try{
        let responses = yield call(fetchLoginCart,payload);
        // yield console.log('FETCH_CART_RESPONSE:',responses);
        yield put({type:FETCH_CART,payload:responses})
        // yield put({type:CART_ERROR,payload:null})
    } catch(error){
        yield put({ type:FETCH_CART,payload:null})
    //   yield put({type:CART_ERROR,payload:error.response?.data || error})
     
    }   
 
}


