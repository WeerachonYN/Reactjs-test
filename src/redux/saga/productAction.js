import { put, call } from "@redux-saga/core/effects"
import { fetchProduct, postComment, getComment } from "../../api/fetchProduct";
import { CATEGORY_IN, SORT_WORD, SEARCH_WORD, FETCH_PRODUCT, FETCH_PRODUCT_ALL, PRODUCT_END, PRODUCT_ERROR, PRODUCT_START, CATEGORY_NOT_IN, PAGE_PRODUCT, PAGESIZE_PRODUCT, SET_COMMENT, GET_COMMENT_REQ } from "../Reducer/action.type";
export function* fetchProductAsync({ payload }) {
    // yield console.log('Param ID :',payload);

    try {
        yield put({ type: PRODUCT_START })
        const product = yield call(fetchProduct, payload);
        // yield console.log('Product is :',product.data);
        // let products = product.data
        yield put({ type: FETCH_PRODUCT, payload: product.data })
        yield put({ type: PRODUCT_ERROR, payload: null })
        yield put({ type: PRODUCT_END })
    }
    catch (error) {
        yield put({ type: FETCH_PRODUCT, payload: null })
        yield put({ type: PRODUCT_ERROR, payload: error.response?.data || error })
        yield put({ type: PRODUCT_END })
    }

}
export function* fetchProductALL({ payload }) {
    yield put({ type: FETCH_PRODUCT_ALL, payload: payload })
}
export function* searchProduct({ search }) {
    yield put({ type: SEARCH_WORD, search: search })
}
export function* sortProduct({ sort }) {
    yield put({ type: SORT_WORD, sort: sort })
}
export function* cate_in_Product({ category_in }) {
    // yield console.log('categort_in:',category_in);
    yield put({ type: CATEGORY_IN, category_in: category_in })
}
export function* cate_notIn_Product({ category_not_in }) {
    yield put({ type: CATEGORY_NOT_IN, category_not_in: category_not_in })
}
export function* page_Product({ page }) {
    yield put({ type: PAGE_PRODUCT, page: page })
}
export function* pageSize_Product({ page_size }) {
    yield put({ type: PAGESIZE_PRODUCT, page_size: page_size })
}

export function* setCOMMENT({ token, message,product }) {
    try {
        yield call(postComment, { token, message,product })
        yield put({ type: PRODUCT_ERROR, payload: null })
    } catch (error) {
        yield put({ type: PRODUCT_ERROR, payload: error?.response.data || error })
    }
}
export function* getCOMMENT({ token }) {
    try {
        const message = yield call(getComment, token)
        yield put({ type: SET_COMMENT, payload: message })
    } catch (error) {
        console.log(error);
    }
}