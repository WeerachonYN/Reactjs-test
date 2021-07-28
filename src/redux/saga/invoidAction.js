import{put} from 'redux-saga/effects';
import { call } from '@redux-saga/core/effects';
import { CheckInvoid,GetInvoid,GetDetailInvoid,Submitvoid } from '../../api/fetchInvoid';
import {COUNT_INVOID,FETCH_INVOID, INVOID_END,GET_INVOID, FETCH_INVOID_REQ,INVOID_ERROR, INVOID_START,FETCH_LOGIN_CART_REQ, GET_INVOID_REQ} from '../Reducer/action.type';
export function* getInvoid({token,status}) {
    // console.log('FETCH_INVOID_token:',token);
    try{
        let responses = yield call(GetInvoid,{token,status});
        yield console.log('Invoid_Token:',responses.count);
        yield put({type:FETCH_INVOID,payload:responses.results})
        yield put({type:COUNT_INVOID,payload:responses.status})
        yield put({type:INVOID_ERROR,payload:null})
    } catch(error){
        yield put({ type:FETCH_INVOID,payload:null})
      yield put({type:INVOID_ERROR,payload:error.response?.data || error})
    }   
 
}

export function* checkOutInvoid({token}) {
    try{
       const response = yield call(CheckInvoid,{token});
        // yield console.log('Response',response);
        yield put({type:FETCH_INVOID_REQ,token:token})
        yield put({type:GET_INVOID_REQ,token:token,id:response.id.id})
        yield put({type:FETCH_LOGIN_CART_REQ,payload:token});
    } catch(error){
      yield put({type:INVOID_ERROR,payload:error.response?.data || error})
    }   
 
}


export function* getDetailInvoid({token,id,status:status}) {
    console.log('GET_INVOID_REQ:',id);
    try{
        let responses = yield call(GetDetailInvoid,{token,id});
        // yield console.log('FETCH_CART_RESPONSE:',responses);
        yield put({type:GET_INVOID,payload:{...responses,status:status}})
        yield put({type:INVOID_ERROR,payload:null})
    } catch(error){
        yield put({type:GET_INVOID,payload:null})
      yield put({type:INVOID_ERROR,payload:error.response?.data || error})
    }   
 
}
export function* submitVoid({token,id}) {
    console.log('SUBMIT_VOID:',id);
    try{
        let responses = yield call(Submitvoid,{token,id});
        // yield console.log('FETCH_CART_RESPONSE:',responses);
        yield put({type:FETCH_INVOID_REQ,token:token})
        yield put({type:INVOID_ERROR,payload:null})
    } catch(error){
        // yield put({ type:FETCH_CART,payload:null})
      yield put({type:INVOID_ERROR,payload:error.response?.data || error})
    }   
 
}