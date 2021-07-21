import{put} from 'redux-saga/effects';
import { call } from '@redux-saga/core/effects';
import { CheckInvoid,GetInvoid,GetDetailInvoid,Submitvoid } from '../../api/fetchInvoid';
import {FETCH_INVOID, INVOID_END, FETCH_INVOID_REQ,INVOID_ERROR, INVOID_START,FETCH_LOGIN_CART_REQ} from '../Reducer/action.type';
export function* getInvoid({token}) {
    console.log('FETCH_INVOID:',token);
    try{
        let responses = yield call(GetInvoid,token);
        // yield console.log('FETCH_Invoid_RESPONSE:',responses);
        yield put({type:FETCH_INVOID,payload:responses.data.results})
        yield put({type:INVOID_ERROR,payload:null})
    } catch(error){
        yield put({ type:FETCH_INVOID,payload:null})
      yield put({type:INVOID_ERROR,payload:error.response?.data || error})
    }   
 
}

export function* checkOutInvoid({token}) {
    try{
        yield call(CheckInvoid,{token});
        yield put({type:FETCH_INVOID_REQ,token:token})
        yield put({type:FETCH_LOGIN_CART_REQ,payload:token});
    } catch(error){
      yield put({type:INVOID_ERROR,payload:error.response?.data || error})
    }   
 
}


export function* getDetailInvoid({token}) {
    console.log('GETDETAIL_INVOID:',token);
    try{
        let responses = yield call(GetDetailInvoid,token);
        // yield console.log('FETCH_CART_RESPONSE:',responses);
        yield put({type:FETCH_INVOID,payload:responses})
        yield put({type:INVOID_ERROR,payload:null})
    } catch(error){
        yield put({ type:FETCH_INVOID,payload:null})
      yield put({type:INVOID_ERROR,payload:error.response?.data || error})
    }   
 
}
export function* submitVoid({payload}) {
    console.log('SUBMIT_VOID:',payload);
    try{
        let responses = yield call(Submitvoid,payload);
        // yield console.log('FETCH_CART_RESPONSE:',responses);
        // yield put({type:FETCH_CART,payload:responses})
        yield put({type:INVOID_ERROR,payload:null})
    } catch(error){
        // yield put({ type:FETCH_CART,payload:null})
      yield put({type:INVOID_ERROR,payload:error.response?.data || error})
    }   
 
}