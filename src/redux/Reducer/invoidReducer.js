import {
    FETCH_INVOID,
    INVOID_END,
    INVOID_ERROR,
    INVOID_START,
    GET_INVOID,
    COUNT_INVOID,
} from './action.type'
const initialState = {
    loading: false,
    error: '',
    invoid: [],
    data_in: null,
    count:null,

}
export function invoidReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_INVOID:

            return {
                ...state,
                invoid: action.payload
            }
        case COUNT_INVOID:
            return {
                ...state,
                count: action.payload

            }
        case GET_INVOID:

            return {
                ...state,
                data_in: action.payload
            }
        case INVOID_START:
            return {
                ...state,
                loading: true
            }
        case INVOID_END:
            return {
                ...state,
                loading: false
            }
        case INVOID_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}