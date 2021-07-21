import { put } from "@redux-saga/core/effects"
export const FETCH_START = 'FETCH_START'
export const FETCH_END  = 'FETCH_END'
export const FETCH_ERROR = 'FETCH_ERROR'

export const FETCH_START_REQ = 'FETCH_START_REQ'
export const FETCH_END_REQ  = 'FETCH_END_REQ'
export const FETCH_ERROR_REQ = 'FETCH_ERROR_REQ'

export function* startFetch(){
    yield put({
        type:FETCH_START
    })
}
export function* endFetch(){
    yield put({
        type:FETCH_END
    })
}
export function* errorFetch({payload}){
    yield put({
        type:FETCH_ERROR,
        payload:payload
    })
}