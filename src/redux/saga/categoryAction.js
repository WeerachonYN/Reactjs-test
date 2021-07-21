import { put,call } from "@redux-saga/core/effects"
import { fetchCategory } from "../../api/fetchCategory";
import { CATEGORY_END,CATEGORY_START,CATEGORY_ERROR,FETCH_CATEGORY } from "../Reducer/action.type";
export function* fetchProduct({payload}){
        // yield console.log('Param ID :',payload);

      try{ 
            yield put({type:CATEGORY_START})
            const product = yield call(fetchProduct,payload);
            // yield console.log('Product is :',product.data);
            // let products = product.data
            yield put({type:FETCH_CATEGORY,payload:product.data})
            yield put({type:CATEGORY_ERROR,payload:null})
            yield put({type:CATEGORY_END})
        }
        catch(error){
            yield put({type:FETCH_CATEGORY,payload:null})
            yield put({type:CATEGORY_ERROR,payload:error.response?.data || error})
            yield put({type:CATEGORY_END})
        }
    
}
export function* fetchCategoryALL(){
    // yield console.log('Param ID :',payload);
  try{ 
        yield put({type:CATEGORY_START})
        const response = yield call(fetchCategory);
        yield put({type:FETCH_CATEGORY,payload:response})
        yield put({type:CATEGORY_ERROR,payload:null})
        yield put({type:CATEGORY_END})
    }
    catch(error){
        yield put({type:FETCH_CATEGORY,payload:null})
        yield put({type:CATEGORY_ERROR,payload:error.response?.data || error})
        yield put({type:CATEGORY_END})
    }

}