import {
    SET_AUTH,
    AUTH_START,
    AUTH_END,
    AUTH_ERROR,
    GET_USER,
} from './action.type'
const initialState = {
    token: null,
    user: null,
    loading: false,
    time: null,
    error: null,
    redir:false
}
export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_START:

            return {
                ...state,
                loading: true
            }
        case SET_AUTH:
            console.log('SET_AUTH',action.payload);
            if (action.payload) {
                return {
                    ...state,
                    token: action.payload,
                    time: (Date.now() / 1000) + action.payload.expires_in,
                    redir:true,

                }
            } else {
                return {
                    ...state,
                    token:action.payload
                }
            }

        case GET_USER:
            return {
                ...state,
                user: action.payload,
            }

        case AUTH_END:
            return {
                ...state,
                loading: false
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}
// export default addToCart