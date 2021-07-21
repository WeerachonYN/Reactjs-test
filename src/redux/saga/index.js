import { takeEvery, all } from "@redux-saga/core/effects";
import { fetchCartAsync, fetchOnLogin } from "./cartActions";
import { fetchAuthAsync } from "../saga/authActions";
import { SEARCH_WORD_REQ, FETCH_AUTH_REQ, FETCH_CART_REQ, FETCH_LOGIN_CART_REQ, FETCH_PRODUCT_REQ, DELETE_CART_REQ, UPDATE_CART_REQ, CHECK_INVOID_REQ, FETCH_PRODUCT_ALL_REQ, FETCH_CATEGORY_REQ,SORT_WORD_REQ, CATEGORY_IN_REQ, CATEGORY_NOT_IN_REQ, PAGE_PRODUCT_REQ, PAGESIZE_PRODUCT_REQ, FETCH_INVOID_REQ } from '../Reducer/action.type'
import { fetchProductAsync, fetchProductALL, searchProduct, sortProduct, cate_in_Product, cate_notIn_Product, page_Product, pageSize_Product } from "./productAction";
import { deleteCart, updateCart } from './cartActions'
import { fetchCategoryALL } from "./categoryAction";
import { checkOutInvoid,getInvoid } from "./invoidAction";

// #CRUDto cart 

function* watchDeleteCart() { yield takeEvery(DELETE_CART_REQ, deleteCart) }
function* watchUpdateCart() { yield takeEvery(UPDATE_CART_REQ, updateCart) }

// #AUTH
function* watchfetchAuthAsync() {
    yield takeEvery(FETCH_AUTH_REQ, fetchAuthAsync)
}


// # CART API
function* watchFetchCARTAsync() {
    yield takeEvery(FETCH_CART_REQ, fetchCartAsync)
}
function* watchFetchCARTLOGINAsync() {
    yield takeEvery(FETCH_LOGIN_CART_REQ, fetchOnLogin)
}

// #PRODUCT
function* watchFetchProductAsync() {
    yield takeEvery(FETCH_PRODUCT_REQ, fetchProductAsync)
}
function* watchfetchProductALL() {
    yield takeEvery(FETCH_PRODUCT_ALL_REQ, fetchProductALL)
}
// # Filter Product
function* watchSearch() {
    yield takeEvery(SEARCH_WORD_REQ, searchProduct)
}
function* watchSort() {
    yield takeEvery(SORT_WORD_REQ, sortProduct)
}
function* watchCategory_in() {
    yield takeEvery(CATEGORY_IN_REQ, cate_in_Product)
}
function* watchCategory_not_in() {
    yield takeEvery(CATEGORY_NOT_IN_REQ, cate_notIn_Product)
}
function* watchPage() {
    yield takeEvery(PAGE_PRODUCT_REQ, page_Product)
}
function* watchPage_size() {
    yield takeEvery(PAGESIZE_PRODUCT_REQ, pageSize_Product)
}
// #category
function* watchFetchCategoryAll() {
    yield takeEvery(FETCH_CATEGORY_REQ, fetchCategoryALL)
}

// # INVOID
function* watchCheckOUT() {
    yield takeEvery(CHECK_INVOID_REQ, checkOutInvoid)
}
function* watchFetchInvoid() {
    yield takeEvery(FETCH_INVOID_REQ, getInvoid)
}
export default function* rootSaga() {
    yield all([

        // #PRODUCT
        watchfetchProductALL(),
        watchFetchProductAsync(),
        //#filter
        watchSearch(),
        watchSort(),
        watchCategory_in(),
        watchCategory_not_in(),
        watchPage(),
        watchPage_size(),
        // #Category
        watchFetchCategoryAll(),
        // # auth
        watchfetchAuthAsync(),

        // #cart API
        watchFetchCARTAsync(),
        watchFetchCARTLOGINAsync(),
        watchDeleteCart(),
        watchUpdateCart(),

        // #Invoid
        watchCheckOUT(),
        watchFetchInvoid() ,


    ])
}