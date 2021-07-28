import {
    FETCH_PRODUCT,
    PRODUCT_END,
    PRODUCT_ERROR,
    PRODUCT_START,
    FETCH_PRODUCT_ALL,
    SEARCH_WORD,
    SORT_WORD,
    CATEGORY_IN,
    CATEGORY_NOT_IN,
    PAGE_PRODUCT,
    PAGESIZE_PRODUCT,
    SET_COMMENT,
} from './action.type'
const initialState = {
    data: null,
    dataAll: null,
    search: null,
    sort: null,
    category_in: [],
    category_not_in: [],
    page: null,
    page_size: null,
    loading: false,
    error: '',
    comment:[],
}
export function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT:
          
            return {
                ...state,
                data: action.payload
            }
        case SEARCH_WORD:
            return {
                ...state,
                search: action.search
            }
        case SORT_WORD:
            return {
                ...state,
                sort: action.sort
            }
        case CATEGORY_IN:
            return {
                ...state,
                category_in:[ action.category_in]
            }
        case CATEGORY_NOT_IN:
            return {
                ...state,
                category_not_in: [action.category_not_in]
            }
        case PAGE_PRODUCT:
            return {
                ...state,
                page: action.page
            }
        case PAGESIZE_PRODUCT:
            return {
                ...state,
                page_size: action.page_size
            }
        case FETCH_PRODUCT_ALL:
        
            return {
                ...state,
                dataAll: action.payload
            }
        case PRODUCT_START:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_END:
            return {
                ...state,
                loading: false
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload
            }
            case SET_COMMENT:
                return {
                    ...state,
                    comment:action.payload
                }
        default:
            return state
    }
}